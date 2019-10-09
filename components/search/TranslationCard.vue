<template>
  <comment-container>
    <div v-for="comment in comments" :key="comment.id">
      <div class="comment-box" v-if="comment.is_accepted">
        <span class="user">{{comment.translator}}</span>
        <div class="comment-content">
          <span class="comment">{{comment.translation}}</span>
          <div class="action-box">
            <span class="action">좋아요</span>
            <timeago class="updated-at" :datetime="comment.updated_at"></timeago>
          </div>
        </div>
      </div>
      <div class="waiting-comment-box" v-else>
        <span class="user">{{comment.translator}}</span>
        <span>승인을 기다리고 있는 번역입니다.</span>
        <timeago class="updated-at" :datetime="comment.updated_at"></timeago>
      </div>
    </div>
  </comment-container>
</template>

<script>
import CommentContainer from "../common/CommentContainer";
export default {
  components: {
    CommentContainer
  },
  props: {
    comments: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

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

.waiting-comment-box {
  color: $gray-darker;
  padding: 0.4rem 0;
  display: flex;
  span {
    &.user {
      width: 10rem;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 700;
    }
    margin-right: 1.6rem;
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
