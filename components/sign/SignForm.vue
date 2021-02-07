<template>
  <div class="sign-container">
    <form class="sign-form">
      <slot></slot>
    </form>
  </div>
</template>
<style lang="scss" scoped>
@import "~utils";
.sign-container {
  width: 40rem;
  padding: 0 1.6rem;

  @include media("<=xs") {
    width: 32rem;
  }

  @include media(">=md") {
    width: 48rem;
  }

  .sign-form {
    width: 100%;

    /deep/ .base-input {
      width: 100%;
    }
  }
}

/deep/ .sign-in-btn {
  width: 100%;
  height: 4.8rem;
  margin: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.95;
  }
}

/deep/ hr.separating-line {
  width: 100%;
  border: 0;
  margin: 1.6rem 0;
  border-bottom: 1px solid $gray-light;
}
</style>
