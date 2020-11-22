<template>
  <modal name="avatar-edit-modal" :width="'320'" :height="'400'">
    <div class="avatar-edit-modal">
      <h2>프로필 이미지 변경</h2>
      <section class="cropper-area">
        <img :src="imgSrc" v-show="!cropping" />
        <vue-cropper
          ref="cropper"
          :src="imgSrc"
          v-show="cropping"
          :aspect-ratio="16 / 16"
        />
      </section>
      <button class="photo-upload-btn">
        <span>사진업로드</span>
        <input ref="input" type="file" accept="image/*" @change="setImage" />
      </button>
      <div class="command-btn-container">
        <button class="cancel-btn" @click="closeModal">취소</button>
        <button class="save-btn" @click="savePhoto">저장</button>
      </div>
    </div>
  </modal>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { mapState, mapActions } from "vuex";
import { image } from "../../api";

export default {
  components: { VueCropper },
  created() {
    const routeUserid = this.$route.params.userid;
    if (routeUserid != this.user.id) {
      this.$router.push({
        params: {
          userid: this.user.id
        }
      });
    }
    this.initPhoto();
  },
  data() {
    return {
      imgSrc: "",
      cropping: false
    };
  },
  computed: {
    ...mapState("user", ["user"])
  },
  methods: {
    ...mapActions("user", ["UPDATE_PROFILE"]),
    setImage(e) {
      const file = e.target.files[0];
      if (file.type.indexOf("image/") === -1) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          this.cropping = true;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    initPhoto() {
      if (this.user && this.user.photo && this.user.photo !== "") {
        this.imgSrc = this.user.photo;
      } else {
        this.imgSrc = require("~/assets/images/null-avatar.png");
      }
    },
    closeModal() {
      this.cropping = false;
      this.$modal.hide("avatar-edit-modal");
    },
    savePhoto() {
      if (this.cropping) {
        let data;
        let cropped = this.$refs.cropper
          .getCroppedCanvas({
            width: 196,
            height: 196
          })
          .toBlob(
            blob => {
              const formData = new FormData();
              formData.append("photo", blob);
              data = image.uploadPhoto(formData).then(data => {
                this.UPDATE_PROFILE({ photo: data.path }).then(() => {
                  this.closeModal();
                });
              });
            },
            "image/png",
            1
          );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";
.avatar-edit-modal {
  margin: 1.6rem;
  section.cropper-area {
    display: flex;
    justify-content: center;
    margin-bottom: 2.4rem;
    min-height: 196px;
    max-height: 196px;
    img {
      width: 196px;
    }
  }
  .photo-upload-btn {
    @include colored-button($black);
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 4rem;
    line-height: 3.6rem;
    > span {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
    }
    > input {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }

  .command-btn-container {
    width: 100%;
    margin-top: 1.6rem;
    display: flex;
    justify-content: center;

    > button {
      @include default-button();
      margin: 0 0.8rem;
    }
  }
}
</style>
