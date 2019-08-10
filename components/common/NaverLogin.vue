<template>
  <button class="naver-login-btn" @click.prevent>
    <div>
      <img src="../../assets/iamges/naver.svg" />
      <span>네이버로 로그인</span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import "~styles/utils.scss";
.naver-login-btn {
  background-color: #00c73c;
  color: #fff;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }

  span {
    padding-left: 0.8rem;
  }
}
</style>