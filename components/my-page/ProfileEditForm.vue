<template>
  <form class="profile-edit-form">
    <div class="profile-item-container">
      <profile-icon></profile-icon>
      <profile-edit-item :label="'이메일'" :value="'seonujang@gmail.com'"></profile-edit-item>
    </div>
    <div class="profile-item-container">
      <profile-edit-item :label="'닉네임'" :value="'SJQuant'"></profile-edit-item>
    </div>
    <div class="profile-item-container">
      <password-edit-item></password-edit-item>
    </div>
  </form>
</template>

<script>
import ProfileIcon from "../common/ProfileIcon";
import ProfileEditItem from "./ProfileEditItem.vue";
import PasswordEditItem from "./PasswordEditItem.vue";
export default {
  components: {
    ProfileIcon,
    ProfileEditItem,
    PasswordEditItem
  }
};
</script>

<style lang="scss">
@import "~utils";

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
    }

    > span {
      height: 3.2rem;
    }
    > button {
      padding: 0 0.8rem;
      color: $gray-dark;
      border: $gray-light solid 1px;
      border-radius: 2px;
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