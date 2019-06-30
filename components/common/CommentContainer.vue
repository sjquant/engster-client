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
@import "~styles/utils.scss";
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
  .comment-box {
    padding: 0.4rem 0;
    display: flex;
    span {
      &.user {
        width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
      }
    }
  }
}

.comment-content {
  padding-left: 1.6rem;
  .action-box {
    padding-top: 0.4rem;
    color: $gray-darker;
    span {
      padding-right: 1.6rem;
      &.action:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
