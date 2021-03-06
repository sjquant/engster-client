<template>
  <div>
    <form class="profile-edit-form">
      <div
        class="avatar-container"
        @mouseover="profileIconHovered = true"
        @mouseleave="profileIconHovered = false"
        @click="openAvatarEditModal"
      >
        <ProfileCamera v-show="profileIconHovered" />
        <ProfileIcon
          :profilePath="user ? user.photo : ''"
          v-show="!profileIconHovered"
        />
      </div>
      <EditInput
        ref="nicknameInput"
        :label="'닉네임'"
        :error="errors.first('닉네임')"
        v-model="nickname"
        v-validate="'required|min:2|max:12'"
        @save="updateNickname"
        @cancel="cancleNickname"
      />
      <ProfileFormPasswordInput />
    </form>
    <client-only>
      <AvatarEditModal />
    </client-only>
  </div>
</template>

<script>
import ProfileIcon from "../common/ProfileIcon";
import ProfileCamera from "./ProfileCamera";
import EditInput from "../common/EditInput.vue";
import ProfileFormPasswordInput from "./ProfileFormPasswordInput.vue";
import AvatarEditModal from "./AvatarEditModal.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    ProfileIcon,
    ProfileCamera,
    EditInput,
    ProfileFormPasswordInput,
    AvatarEditModal
  },
  created() {
    if (!this.user) {
      this.$router.push("/");
    }
    this.nickname = this.user?.nickname;
  },
  data() {
    return {
      profileIconHovered: false,
      nickname: ""
    };
  },
  computed: {
    ...mapState("user", ["user"])
  },
  methods: {
    ...mapActions("common", ["ADD_ALERT"]),
    ...mapActions("user", ["UPDATE_PROFILE"]),
    openAvatarEditModal() {
      this.$modal.show("avatar-edit-modal");
    },
    updateEmail(email) {
      if (email !== this.user.email) {
        this.UPDATE_PROFILE({ email });
      }
    },
    async updateNickname(nickname) {
      const validated = await this.$validator.validate("닉네임");
      if (!validated) {
        this.ADD_ALERT({ msg: "올바른 닉네임을 입력해주세요.", type: "error" });
        return;
      }

      if (nickname == this.user.nickname) {
        this.$refs.nicknameInput.close();
        return;
      }

      try {
        await this.UPDATE_PROFILE({ nickname });
        this.ADD_ALERT({
          msg: "닉네임이 업데이트 되었습니다.",
          type: "success"
        });
      } catch (error) {
        if (error.response.data.message === "User already exists")
          this.ADD_ALERT({
            msg: "이미 존재하는 닉네임입니다.",
            type: "error"
          });
        else {
          this.ADD_ALERT({
            msg: "올바른 닉네임을 입력해주세요.",
            type: "error"
          });
        }
        this.nickname = this.user.nickname;
      }
      this.$refs.nicknameInput.close();
    },
    cancleNickname() {
      this.nickname = this.user.nickname;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

div.avatar-container {
  width: 12.8rem;
  height: 12.8rem;
  cursor: pointer;
  margin-bottom: 2.4rem;
  > .profile-icon-container,
  > .profile-camera-container {
    margin-bottom: 2.4rem;
  }
}
</style>
