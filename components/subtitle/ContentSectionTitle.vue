<template>
  <div class="title-container">
    <span>{{ subtitleTitle }}</span> |
    <span>{{ category }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    year: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    }
  },
  computed: {
    subtitleTitle() {
      let title = this.year ? `${this.title} (${this.year})` : this.title;
      return title;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
div.title-container {
  color: $gray-darkest;
  margin-bottom: 0.4rem;
  font-weight: 700;
}
</style>