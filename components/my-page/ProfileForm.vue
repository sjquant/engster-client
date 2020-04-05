<template>
  <div>
    <form class="profile-edit-form">
      <div
        class="avatar-container"
        @mouseover="profileIconHovered=true"
        @mouseleave="profileIconHovered=false"
        @click="openAvatarEditModal"
      >
        <ProfileCamera v-show="profileIconHovered" />
        <ProfileIcon :profilePath="user ? user.photo : ''" v-show="!profileIconHovered" />
      </div>
      <EditInput
        :label="'닉네임'"
        :value.sync="nickname"
        :validate="'required'"
        @save="updateNickname"
      />
      <ProfileFormPasswordInput @save="updatePassword" />
    </form>
    <AvatarEditModal />
  </div>
</template>

<script>
import ProfileIcon from "../common/ProfileIcon";
import ProfileCamera from "./ProfileCamera";
import EditInput from "../common/EditInput.vue";
import ProfileFormPasswordInput from "./ProfileFormPasswordInput.vue";
import AvatarEditModal from "./AvatarEditModal.vue";
import { mapState, mapActions } from "vuex";
import { auth } from "~/api";

export default {
  components: {
    ProfileIcon,
    ProfileCamera,
    EditInput,
    ProfileFormPasswordInput,
    AvatarEditModal
  },
  data() {
    return {
      tNickname: null,
      profileIconHovered: false
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    nickname: {
      set(value) {
        this.tNickname = value;
      },
      get() {
        if (typeof this.tNickname === "string") {
          return this.tNickname;
        } else {
          return this.user.nickname;
        }
      }
    }
  },
  methods: {
    ...mapActions("auth", ["UPDATE_PROFILE"]),
    openAvatarEditModal() {
      this.$modal.show("avatar-edit-modal");
    },
    updateEmail(email) {
      if (email !== this.user.email) {
        this.UPDATE_PROFILE({ email });
      }
    },
    updateNickname(nickname) {
      if (nickname !== this.user.nickname) {
        this.UPDATE_PROFILE({ nickname });
      }
    },
    updatePassword({ originalPassword, newPassword }) {
      auth.resetPassword({ originalPassword, newPassword }).catch(() => {
        alert("비밀번호가 틀립니다.");
      });
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