<template>
  <div class="profile-edit-item password-edit-item" :class="{editable: editable}">
    <div v-show="!editable">
      <label>비밀번호</label>
      <div class="value-container">
        <span>********</span>
        <button @click.prevent="editItem">수정</button>
      </div>
    </div>
    <div v-show="editable">
      <div class="value-container">
        <form autocomplete="off">
          <div>
            <div class="password-input-wrapper">
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
            <div class="password-input-wrapper">
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
            <div class="password-input-wrapper">
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
            <button @click.prevent="editable=!editable">저장</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editable: false,
      originalPassword: "",
      newPassword: "",
      newPassword2: ""
    };
  },
  methods: {
    editItem() {
      this.editable = !this.editable;
    }
  }
};
</script>