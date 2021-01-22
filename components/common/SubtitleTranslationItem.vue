<template>
  <section class="container">
    <span class="user">{{ translation.user.nickname }}</span>
    <div class="content">
      <span>{{ translation.translation }}</span>
      <span class="like" v-show="likeCount > 0">
        <LikeIcon :class="{ active: liked }" />
        {{ likeCount }}
      </span>
      <div class="action-box">
        <span class="action" @click="likeTrnaslation">
          <span v-if="!liked">좋아요</span>
          <span v-else>좋아요취소</span>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import LikeIcon from "../icons/LikeIcon.vue";
import { translation as translationAPI } from "../../api";

export default {
  components: {
    LikeIcon
  },
  created() {
    this.likeCount = this.translation.like_count;
    this.liked = this.translation.user_liked;
  },
  props: {
    translation: Object
  },
  data() {
    return {
      liked: null,
      likeCount: 0
    };
  },
  computed: {
    ...mapGetters("user", ["userid"]),
    isLiked() {
      return this.translation.user_liked;
    }
  },
  methods: {
    async _like(id) {
      await translationAPI.like(id);
      this.liked = true;
      this.likeCount += 1;
    },
    async _unlike(id) {
      await translationAPI.unlike(id);
      this.liked = false;
      this.likeCount -= 1;
    },
    async likeTrnaslation() {
      const id = this.translation.id;
      if (this.liked) {
        await this._unlike(id);
      } else {
        await this._like(id);
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
