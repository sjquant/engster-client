<template>
  <div class="card-container">
    <div class="main-line" v-html="processedLine"></div>
    <div class="sub-line" v-text="subLine" v-if="subLine"></div>
    <CardContentDetail :detail="detail" />
    <CardActions
      :liked="liked"
      :likeCount="likeCount"
      :translationCount="transCount"
      @like="likeLine"
      @open-translations="openTranslations"
    />
    <SubtitleTranslations
      v-if="translationsOpened"
      ref="transCard"
      :subtitle-id="subtitleId"
    />
  </div>
</template>

<script>
import CardContentDetail from "./CardContentDetail.vue";
import CardActions from "./CardActions.vue";
import SubtitleTranslations from "./SubtitleTranslations.vue";
import {
  subtitle as subtitleAPI,
  translation as translationAPI
} from "../../api";

export default {
  components: {
    CardContentDetail,
    CardActions,
    SubtitleTranslations
  },
  created() {
    this.likeCount = this.detail.like_count;
    this.liked = this.detail.user_liked;
    this.transCount = this.detail.translation_count;
  },
  props: {
    mainLine: String,
    subLine: String,
    detail: Object,
    translation: {
      type: String,
      default: null
    },
    highlight: {
      type: String,
      default: ""
    },
    // Whether it is for subtitle or translation
    isSubtitle: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      liked: null,
      likeCount: 0,
      transCount: 0,
      translationsOpened: false
    };
  },
  computed: {
    subtitleId() {
      if (this.isSubtitle) {
        return this.detail.id;
      } else {
        return this.detail.line_id;
      }
    },
    processedLine() {
      if (!this.highlight) return this.mainLine;

      let regexp = new RegExp("(" + this.highlight + ")", "i");
      try {
        return this.mainLine.replace(
          regexp,
          '<span class="line-highlighted">$1</span>'
        );
      } catch (error) {}
    }
  },
  methods: {
    async _likeLine(id) {
      try {
        if (this.isSubtitle) {
          await subtitleAPI.like(id);
        } else {
          await translationAPI.like(id);
        }
        this.liked = true;
        this.likeCount += 1;
      } catch (e) {
        console.error(e);
      }
    },
    async _unlikeLine(id) {
      try {
        if (this.isSubtitle) {
          await subtitleAPI.unlike(id);
        } else {
          await translationAPI.unlike(id);
        }
        this.liked = false;
        this.likeCount -= 1;
      } catch (e) {
        console.error(e);
      }
    },
    async likeLine() {
      const id = this.detail.id;
      if (this.liked) {
        await this._unlikeLine(id);
      } else {
        await this._likeLine(id);
      }
    },
    openTranslations() {
      this.translationsOpened = !this.translationsOpened;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";

.card-container {
  border-bottom: 1px solid $gray-light;
  min-height: 8rem;
  padding-top: 1.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    margin-bottom: 4rem;
  }

  .main-line {
    padding-top: 0;
  }

  .sub-line {
    padding-top: 0.8rem;
    color: $gray-darker;
  }
}
</style>
