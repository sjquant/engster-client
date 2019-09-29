<template>
  <section class="main-content-container">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "~utils";

.main-content-container {
  width: 100%;

  @include media(">=lg") {
    width: 60%;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

