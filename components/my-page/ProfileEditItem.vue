<template>
  <div class="profile-edit-item">
    <div v-if="!editable">
      <label>{{ label }}</label>
      <div class="value-container">
        <span>{{ value }}</span>
        <button @click.stop>수정</button>
      </div>
    </div>
    <div v-else>
      <label>{{ label }}</label>
      <input
        id="email-fieled"
        v-validate="'required'"
        type="email"
        name="이메일"
        placeholder="example@naver.com"
        :value="value"
      />
      <div
        class="login-error-message"
        v-show="errors.collect('이메일').length > 0"
      >{{ errors.first('이메일') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editable: false
    };
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    }
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
    border-bottom: 1px solid $gray-light;
    display: flex;
    justify-content: space-between;

    button {
      margin-left: 2.4rem;
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
}
</style>