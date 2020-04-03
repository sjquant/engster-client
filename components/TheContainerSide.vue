<template>
  <section class="side-content-container">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "~utils";

.side-content-container {
  display: none;
  height: 100%;
  @include media(">=md") {
    display: block;
    flex: 1;
  }
}
</style>

