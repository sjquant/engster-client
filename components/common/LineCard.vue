<template>
  <div class="line-card-container">
    <section class="content-container">
      <slot></slot>
    </section>
  </div>
</template>

<style lang="scss">
@import "~utils";
.line-card-container {
  border-bottom: 1px solid $gray-light;
  min-height: 8rem;
  padding-top: 2.8rem;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 4rem;
  }

  .content-container {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
}
</style>
