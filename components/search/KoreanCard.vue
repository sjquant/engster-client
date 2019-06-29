<template>
  <LineCard>
    <div class="translation-content">
      <div class="translation">{{ line.translation }}</div>
      <div class="line">{{ line.line.line }}</div>
    </div>
    <div class="line-info">
      <div class="title-category">
        <span>{{ line.content.title }}</span> |
        <span>{{ line.category.category }}</span>
      </div>
      <div>
        <Tag v-for="each in line.genres" :key="each.id">#{{ each.genre }}</Tag>
      </div>
    </div>
    <div class="line-action-container">
      <div class="action-box">
        <Like />
        <span>{{ line.like_count }}</span>
      </div>
      <div class="action-box">
        <Pencil />
        <span>{{ line.translation_count }}</span>
      </div>
      <!-- <div class="action-box">
        <Share/>
        <span>0</span>
      </div>-->
    </div>
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import Tag from "../common/Tag.vue";
import Pencil from "./Pencil.vue";
import Like from "./Like.vue";
import Share from "./Share.vue";

export default {
  components: {
    LineCard,
    Tag,
    Pencil,
    Like,
    Share
  },
  props: {
    line: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="scss">
@import "~styles/utils.scss";

.translation-content {
  .line {
    color: $gray-darker;
    padding-top: 0.4rem;
  }
}
</style>