<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@import "~utils";

.container {
  display: none;
  height: 100%;
  @include media(">=md") {
    display: block;
    flex: 1;
  }
}
</style>

