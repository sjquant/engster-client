<template>
  <div class="comment-box">
    <span class="user">{{ comment.user.nickname }}</span>
    <div class="comment-content">
      <span class="comment">{{ comment.translation }}</span>
      <span class="comment-like" v-show="comment.like_count > 0">
        <LikeIcon :class="{ active: isLiked }" />
        {{ comment.like_count }}
      </span>
      <div class="action-box">
        <span class="action" @click="updateLike(comment.id)">
          <span v-if="!isLiked">좋아요</span>
          <span v-else>좋아요취소</span>
        </span>
        <timeago class="updated-at" :datetime="comment.updated_at"></timeago>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import LikeIcon from "../icons/LikeIcon.vue";
import { subtitle } from "~/api";

export default {
  components: {
    LikeIcon
  },
  computed: {
    ...mapState({
      userid: state => (state.auth.user ? state.auth.user.id : null)
    }),
    isLiked() {
      return this.comment.user_liked;
    }
  },
  props: {
    comment: Object
  },
  methods: {
    ...mapActions("subtitle", [
      "LIKE_COMMENT_TRANSLATION",
      "UNLIKE_COMMENT_TRANSLATION"
    ]),
    updateLike(lineid) {
      if (!this.isLiked) {
        subtitle.likeKorean(lineid).then(() => {
          this.comment.user_liked = true;
          this.comment.like_count += 1;
        });
      } else {
        subtitle.unlikeKorean(lineid).then(() => {
          this.comment.user_liked = false;
          this.comment.like_count -= 1;
        });
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

  span.comment-like {
    color: $gray-dark;

    .like-icon {
      margin-left: 1.6rem;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
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
