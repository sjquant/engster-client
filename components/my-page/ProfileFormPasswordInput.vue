<template>
  <EditInput label="비밀번호" :value="passwordValue" ref="editInput">
    <template v-slot:input>
      <form autocomplete="off">
        <div>
          <div class="password-input-container">
            <label>기존 비밀번호</label>
            <input
              v-validate="'required|min:8'"
              name="기존 비밀번호"
              type="password"
              placeholder="********"
              v-model="originalPassword"
              autocomplete="new-password"
            />
          </div>
          <div
            class="error-message"
            v-show="errors.collect('기존 비밀번호').length > 0"
          >{{ errors.first('기존 비밀번호') }}</div>
          <div class="password-input-container">
            <label>비밀번호 (8자 이상)</label>
            <input
              v-validate="'required|min:8'"
              name="비밀번호"
              type="password"
              placeholder="********"
              v-model="newPassword"
              autocomplete="new-password"
            />
          </div>
          <div
            class="error-message"
            v-show="errors.collect('비밀번호').length > 0"
          >{{ errors.first('비밀번호') }}</div>
          <div class="password-input-container">
            <label>비밀번호 확인</label>
            <input
              v-validate="'required'"
              name="비밀번호 확인"
              type="password"
              placeholder="********"
              v-model="newPassword2"
              autocomplete="new-password"
            />
          </div>
          <div
            class="error-message"
            v-show="errors.collect('비밀번호 확인').length > 0"
          >{{ errors.first('비밀번호 확인') }}</div>
        </div>
        <div class="btn-wrapper">
          <button class="cancel-btn" @click.prevent="cancel">취소</button>
          <button class="save-btn" @click.prevent="updatePassword">저장</button>
        </div>
      </form>
    </template>
  </EditInput>
</template>

<script>
import EditInput from "../common/EditInput.vue";

export default {
  components: {
    EditInput
  },
  data() {
    return {
      editable: false,
      passwordValue: "**********",
      originalPassword: "",
      newPassword: "",
      newPassword2: ""
    };
  },
  methods: {
    async updatePassword() {
      this.passwordValue = "**********";
      let validated = await this.$validator.validateAll();
      let paswordMatched =
        this.originalPassword !== this.newPassword &&
        this.newPassword === this.newPassword2;
      if (validated && paswordMatched) {
        this.$emit("save", {
          originalPassword: this.originalPassword,
          newPassword: this.newPassword
        });
        this.originalPassword = "";
        this.newPassword = "";
        this.newPassword2 = "";
        this.$refs.editInput.editable = false;
      }
    },
    cancel() {
      this.$refs.editInput.editable = false;
      this.originalPassword = "";
      this.newPassword = "";
      this.newPassword2 = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";
div.input-container {
  border-color: white;
}

form {
  width: 100%;
  div.password-input-container {
    border-color: $gray-darker;
    border-bottom: 1px solid $gray-light;
    margin-bottom: 1.6rem;

    > input {
      display: block;
      border: 0;
      font-size: 1.6rem;
      height: 3.2rem;
      width: 100%;
    }
  }

  .btn-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      @include default-button();
      &.cancel-btn {
        margin-right: 0.8rem;
      }
    }
  }

  .editable {
    .password-input-container {
      border-color: $gray-darker;
    }
  }
}
</style>