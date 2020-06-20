<template>
  <section class="card-container">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
@import "~utils";
.card-container {
  border-bottom: 1px solid $gray-light;
  min-height: 8rem;
  padding-top: 1.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 4rem;
  }
}
</style>
