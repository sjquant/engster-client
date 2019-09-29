<template>
  <section class="side-content-container">
    <slot></slot>
  </section>
</template>

<style lang="scss">
@import "~utils";

.side-content-container {
  display: none;

  @include media(">=lg") {
    display: block;
    width: 20%;
  }
}
</style>

