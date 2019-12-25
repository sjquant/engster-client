<template>
  <section class="main-content-container">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "~utils";

.main-content-container {
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

