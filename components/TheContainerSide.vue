<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
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

