<template>
  <modal name="avatar-edit-modal" :width="'320'" :height="'360'">
    <div class="avatar-edit-modal">
      <h2>프로필 이미지 변경</h2>
      <section class="cropper-area">
        <img :src="photo" />
        <!-- <vue-cropper ref="cropper" :src="photo" /> -->
      </section>
      <button class="photo-upload-btn">
        <span>사진업로드</span>
        <input type="file" accept="photo" />
      </button>
    </div>
  </modal>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import { mapState } from "vuex";

export default {
  components: { VueCropper },
  data() {
    return {
      imgSrc: ""
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    photo() {
      if (this.user) {
        return require("~/assets/images/null-avatar.png");
      } else {
        return require("~/assets/images/null-avatar.png");
      }
      return this.user.photo;
    }
  }
};
</script>

<style lang="scss">
@import "~utils";
.avatar-edit-modal {
  margin: 1.6rem;
  section.cropper-area {
    display: flex;
    justify-content: center;
    margin-bottom: 2.4rem;
    img {
      width: 196px;
    }
  }
  .photo-upload-btn {
    position: relative;
    width: 100%;
    height: 4rem;
    line-height: 3.6rem;
    margin: 0 auto;
    background-color: $black;
    border: 1px solid $gray-darker;
    border-radius: 4px;
    > span {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      color: #fff;
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
}
</style>