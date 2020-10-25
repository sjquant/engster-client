<template>
  <span class="tag">
    <slot></slot>
  </span>
</template>

<style lang="scss" scoped>
@import "~utils";
.tag {
  border-radius: 3px;
  border: 1px solid $gray;
  background-color: $gray-lighter;
  color: $gray-dark;
  padding: 0 0.4rem;
  font-size: 1.4rem;
  margin-right: 0.8rem;
  text-transform: capitalize;
  cursor: default;
}
</style>
