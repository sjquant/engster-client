<template>
  <div class="comment-container">
    <section class="content-container">
      <div class="comment-box" v-for="comment in comments" :key="comment.id">
        <span class="user">{{comment[userKey]}}</span>
        <div class="comment-content">
          <span class="comment">{{comment[contentKey]}}</span>
          <div class="action-box">
            <span class="action">좋아요</span>
            <timeago class="updated-at" :datetime="comment[updatedAtKey]"></timeago>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: () => []
    },
    userKey: {
      type: String,
      default: () => "user"
    },
    contentKey: {
      type: String,
      default: () => "content"
    },
    updatedAtKey: {
      type: String,
      default: () => "updated_at"
    }
  }
};
</script>

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
