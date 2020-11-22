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
        <timeago
          class="updated-at"
          :datetime="translation.updated_at"
        ></timeago>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LikeIcon from "../icons/LikeIcon.vue";

export default {
  components: {
    LikeIcon
  },
  computed: {
    ...mapGetters("user", ["userid"]),
    isLiked() {
      return this.translation.user_liked;
    }
  },
  props: {
    translation: Object
  },
  methods: {
    ...mapActions("subtitle", ["LIKE_TRANSLATION", "UNLIKE_TRANSLATION"]),
    updateLike(lineid) {
      if (!this.isLiked) {
        this.LIKE_TRANSLATION(this.translation.id).then(() => {
          this.$emit("translation-liked", this.translation.id);
        });
      } else {
        this.UNLIKE_TRANSLATION(this.translation.id).then(() => {
          this.$emit("translation-unliked", this.translation.id);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

.container {
  margin: 0.4rem 1.6rem;
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
