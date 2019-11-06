<template>
  <div>
    <div>
      <div class="comment-box" v-if="comment.is_accepted">
        <span class="user">{{comment.translator}}</span>
        <div class="comment-content">
          <span class="comment">{{comment.translation}}</span>
          <span class="comment-like" v-show="comment.like_count > 0">
            <like :class="{'active': isLiked}"></like>
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
import Like from "./Like";
import { search } from "~/api";

export default {
  components: {
    Like
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
    ...mapActions("search", [
      "LIKE_COMMENT_TRANSLATION",
      "UNLIKE_COMMENT_TRANSLATION"
    ]),
    updateLike(lineid) {
      if (!this.isLiked) {
        search.likeKorean(lineid).then(() => {
          this.comment.user_liked = true;
          this.comment.like_count += 1;
        });
      } else {
        search.unlikeKorean(lineid).then(() => {
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
