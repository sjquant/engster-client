<template>
  <div>
    <div>
      <div class="comment-box" v-if="comment.is_accepted">
        <span class="user">{{comment.translator}}</span>
        <div class="comment-content">
          <span class="comment">{{comment.translation}}</span>
          <div class="action-box">
            <span class="action" @click="updateLike(comment.id)">좋아요</span>
            <timeago class="updated-at" :datetime="comment.updated_at"></timeago>
          </div>
        </div>
      </div>
      <div class="comment-box" v-else-if="!comment.is_accepted && userid === comment.translator_id">
        <span class="user">{{comment.translator}}</span>
        <div class="comment-content">
          <span class="comment">{{comment.translation}}</span>
          <div class="action-box">
            <span>승인대기중</span>
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      userid: state => (state.auth.user ? state.auth.user.id : null)
    }),
    isLiked() {
      return True;
    }
  },
  props: {
    comment: Object
  },
  methods: {
    ...mapActions("search", ["LIKE_LINE_KOREAN", "UNLIKE_LINE_KOREAN"]),
    updateLike(lineid) {
      if (!this.isLiked) {
        this.LIKE_LINE_KOREAN(lineid);
      } else {
        this.UNLIKE_LINE_KOREAN(lineid);
      }
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
