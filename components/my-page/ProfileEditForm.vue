<template>
  <div>
    <form class="profile-edit-form">
      <div class="profile-item-container">
        <div
          class="profile-avatar-container"
          @mouseover="profileIconHovered=true"
          @mouseleave="profileIconHovered=false"
          @click="openAvatarEditModal"
        >
          <profile-camera v-show="profileIconHovered"></profile-camera>
          <profile-icon v-show="!profileIconHovered"></profile-icon>
        </div>
        <profile-edit-item
          :label="'이메일'"
          :value.sync="email"
          inputValidate="required|email"
          @update="updateEmail"
        ></profile-edit-item>
      </div>
      <div class="profile-item-container">
        <profile-edit-item
          :label="'닉네임'"
          :value.sync="nickname"
          inputValidate="required"
          @update="updateNickname"
        ></profile-edit-item>
      </div>
      <div class="profile-item-container">
        <password-edit-item @update="updatePassword"></password-edit-item>
      </div>
    </form>
    <avatar-edit-modal></avatar-edit-modal>
  </div>
</template>

<script>
import ProfileIcon from "../common/ProfileIcon";
import ProfileCamera from "./ProfileCamera";
import ProfileEditItem from "./ProfileEditItem.vue";
import PasswordEditItem from "./PasswordEditItem.vue";
import AvatarEditModal from "./AvatarEditModal.vue";
import { mapState, mapActions } from "vuex";
import { auth } from "~/api";

export default {
  components: {
    ProfileIcon,
    ProfileCamera,
    ProfileEditItem,
    PasswordEditItem,
    AvatarEditModal
  },
  data() {
    return {
      tEmail: null,
      tNickname: null,
      profileIconHovered: false
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    email: {
      set(value) {
        this.tEmail = value;
      },
      get() {
        return this.tEmail || this.user.email;
      }
    },
    nickname: {
      set(value) {
        this.tNickname = value;
      },
      get() {
        return this.tNickname || this.user.nickname;
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
      if (nickname !== this.nickname) {
        this.UPDATE_PROFILE({ nickname });
      }
    },
    updatePassword({ originalPassword, newPassword }) {
      auth.resetPassword({ originalPassword, newPassword });
    }
  }
};
</script>

<style lang="scss">
@import "~utils";

.profile-item-container {
  > .profile-avatar-container {
    width: 12.8rem;
    cursor: pointer;
    > .profile-icon-container,
    > .profile-camera-container {
      margin-bottom: 2.4rem;
    }
  }
}
.profile-edit-item {
  width: 100%;
  margin-top: 0.8rem;

  label {
    color: $gray-darker;
  }

  div.value-container {
    height: 4.8rem;
    padding: 0.8rem 0;
    line-height: 2;
    border-bottom: 1px solid $gray-light;
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: space-between;

    > div {
      flex: 1;
    }
    input {
      display: block;
      border: 0;
      font-size: 1.6rem;
      height: 3.2rem;
      width: 100%;
    }

    > span {
      height: 3.2rem;
    }
    > button {
      padding: 0 0.8rem;
      color: $gray-dark;
      border: $gray-light solid 1px;
      border-radius: 2px;
      height: 3.2rem;
      line-height: 1;
      &:hover {
        color: $gray-darker;
        border-color: $gray-darker;
        transition: 0.1;
      }
    }
  }

  &.editable {
    div.value-container {
      border-color: $gray-dark;
      transition: 0.1;
      > button {
        color: $gray-dark;
        border-color: $gray-dark;
        &:hover {
          color: $gray-darker;
          border-color: $gray-darker;
          transition: 0.1;
        }
      }
    }
  }
}

.password-edit-item {
  &.editable {
    div.value-container {
      border-color: white;
    }

    div.password-input-wrapper {
      border-color: $gray-dark;
    }
  }

  form {
    width: 100%;
    div.password-input-wrapper {
      border-bottom: 1px solid $gray-light;
      margin-bottom: 1.6rem;
    }

    .btn-wrapper {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      button {
        color: $gray-dark;
        margin-top: 0.8rem;
        padding: 0 0.8rem;
        border: $gray-dark solid 1px;
        border-radius: 2px;
        height: 3.2rem;
        line-height: 1;
        &:hover {
          color: $gray-darker;
          border-color: $gray-darker;
          transition: 0.1;
        }
      }
    }
  }
}
</style>