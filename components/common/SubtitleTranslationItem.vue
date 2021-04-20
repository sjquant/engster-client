<template>
  <div class="container">
    <div class="user">{{ translation.user.nickname }}</div>
    <div class="content">
      <span v-if="visible">{{ translation.translation }}</span>
      <span class="pending-translation" v-else
        >💬 승인을 기다리고 있는 번역입니다.</span
      >
      <span class="like" v-show="likeCount > 0">
        <LikeIcon :class="{ active: liked }" />
        {{ likeCount }}
      </span>
      <div class="action-box">
        <span class="action" @click="likeTrnaslation" v-if="visible">
          <span v-if="!liked">좋아요</span>
          <span v-else>좋아요취소</span>
        </span>
        <span class="action" @click="shouldCheck = true" v-if="!visible">
          <span v-if="!visible">확인하기</span>
        </span>
      </div>
    </div>
    <div class="more-menu" v-if="isSelf">
      <button class="more-icon" @click="moreMenuOpened = !moreMenuOpened">
        <MoreIcon width="1.2rem" height="1.2rem" />
      </button>
      <!-- <div class="more-list" v-if="moreMenuOpened" v-click-outside="closeMenu">
        <button class="more-list__btn">수정</button>
        <button class="more-list__btn">삭제</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { translation as translationAPI } from "../../api";
import LikeIcon from "../icons/LikeIcon.vue";
import MoreIcon from "../icons/MoreIcon.vue";

export default {
  components: {
    LikeIcon,
    MoreIcon
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
      likeCount: 0,
      shouldCheck: false,
      moreMenuOpened: false
    };
  },
  computed: {
    ...mapGetters("user", ["userid", "isAdmin"]),
    isLiked() {
      return this.translation.user_liked;
    },
    isApproved() {
      return this.translation.status === "APPROVED";
    },
    isSelf() {
      return this.translation.user.id === this.userid;
    },
    visible() {
      return this.isApproved || this.isSelf || this.isAdmin || this.shouldCheck;
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
    },
    closeMenu() {
      this.moreMenuOpened = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~utils";

.container {
  margin: 0.4rem 1.6rem;
  display: flex;
  position: relative;
  .user {
    width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
  }
}
.content {
  padding-left: 1.6rem;

  .like {
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
.more-menu {
  > .more-icon {
    position: absolute;
    right: 0;
  }
  > .more-list {
    position: absolute;
    top: 2.4rem;
    margin-bottom: 0.8rem;
    right: 0;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.15);
    padding: 0.4rem 2.8rem;

    > .more-list__btn {
      padding-bottom: 0.4rem;
      &:hover {
        color: $red-dark;
      }
    }
  }
}
</style>
