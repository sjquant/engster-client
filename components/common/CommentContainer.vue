<template>
  <div>
    <div class="comment-container">
      <section class="content-container">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
@import "~utils";
.comment-container {
  width: 100%;
  background-color: $gray-lighter;
  margin-bottom: 1.6rem;
  border-radius: 4px;
  padding: 0.8rem 0;

  > .content-container {
    max-height: 24rem;
    overflow: auto;
  }
}
</style>
