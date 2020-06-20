<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@import "~utils";

.container {
  width: 100%;
  height: 100%;
  @include media(">=md") {
    width: 60%;
    max-width: $x-large-w;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>

