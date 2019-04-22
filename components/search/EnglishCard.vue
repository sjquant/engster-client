<template>
  <LineCard>
    <div class="line">
      <a href="#">{{ line.line }}</a>
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
        <Like/>
        <span>10</span>
      </div>
      <div class="action-box">
        <Pencil/>
        <span>4</span>
      </div>
      <div class="action-box">
        <Share/>
        <span>0</span>
      </div>
    </div>
  </LineCard>
</template>

<script>
import LineCard from "../common/LineCard.vue";
import Tag from "~/components/common/Tag.vue";
import Pencil from "~/components/icons/Pencil";
import Like from "~/components/icons/Like";
import Share from "~/components/icons/Share";

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


<style lang="scss" scoped>
@import "~styles/utils.scss";
.line-info {
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  color: $gray-dark;

  > .title-category {
    color: $gray-darkest;
    margin-bottom: 0.4rem;
    font-weight: 700;
  }
}

.line-action-container {
  padding-bottom: 2rem;
  display: flex;

  .action-box {
    margin-right: 3.2rem;
    color: #8795a1;
    display: flex;
    align-items: center;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      cursor: pointer;
    }

    > span {
      padding-left: 0.8rem;
    }
  }
}
</style>