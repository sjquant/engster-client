<template>
  <button class="fb-login-btn" @click.prevent>
    <div>
      <img src="../../assets/images/facebook.svg" />
      <span>페이스북으로 로그인</span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import "~styles/utils.scss";
.fb-login-btn {
  display: flex;
  justify-content: center;
  background-color: #3b5998;
  color: #fff;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 0.8rem;
  }
}
</style>