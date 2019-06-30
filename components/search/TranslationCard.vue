<template>
  <CommentContainer>
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
        <span>승인을 기다리고 있는 번역입니다.</span>
        <timeago class="updated-at" :datetime="comment.updated_at"></timeago>
      </div>
    </div>
  </CommentContainer>
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
@import "~styles/utils.scss";

.waiting-comment-box {
  color: $gray-darker;
  padding: 0.4rem 0;

  span {
    margin-right: 1.6rem;
  }
}
</style>
