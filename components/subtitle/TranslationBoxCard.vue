<template>
  <section class="container">
    <span class="user">{{ translation.user.nickname }}</span>
    <div class="content">
      <span>{{ translation.translation }}</span>
      <span class="like" v-show="translation.like_count > 0">
        <LikeIcon :class="{ active: isLiked }" />
        {{ translation.like_count }}
      </span>
      <div class="action-box">
        <span class="action" @click="updateLike(translation.id)">
          <span v-if="!isLiked">좋아요</span>
          <span v-else>좋아요취소</span>
        </span>
        <timeago class="updated-at" :datetime="translation.updated_at"></timeago>
      </div>
    </div>
  </section>
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
      return this.translation.user_liked;
    }
  },
  props: {
    translation: Object
  },
  methods: {
    ...mapActions("subtitle", [
      "LIKE_translation_TRANSLATION",
      "UNLIKE_translation_TRANSLATION"
    ]),
    updateLike(lineid) {
      if (!this.isLiked) {
        subtitle.likeKorean(lineid).then(() => {
          this.translation.user_liked = true;
          this.translation.like_count += 1;
        });
      } else {
        subtitle.unlikeKorean(lineid).then(() => {
          this.translation.user_liked = false;
          this.translation.like_count -= 1;
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~utils";

.container {
  padding: 0.4rem 1.6rem;
  display: flex;
  span.user {
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
  }
}

.content {
  padding-left: 1.6rem;

  span.like {
    color: $gray-dark;
    /deep/ .like-icon {
      margin-left: 1.6rem;
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  .action-box {
    padding-top: 0.4rem;
    color: $gray-darker;
    .action {
      padding-right: 1.6rem;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
