<template>
  <div class="comment-input-container">
    <input
      class="comment-input"
      ref="input"
      type="text"
      :placeholder="placeholder"
      @keyup.enter="createComment"
    />
    <div class="plus-btn" @click="createComment">
      <Plus />
    </div>
  </div>
</template>

<script>
import Plus from "./Plus.vue";
export default {
  components: {
    Plus
  },
  props: {
    placeholder: {
      type: String
    }
  },
  methods: {
    createComment() {
      let comment = this.$refs.input.value;
      this.$emit("comment-created", comment);
    }
  }
};
</script>

<style lang="scss">
@import "~utils";

.comment-input-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  .comment-input {
    width: 100%;
    border-radius: 4px;
    font-size: 1.6rem;
    border: 1px solid $gray-light;
    padding: 0.8rem 3.2rem 0.8rem 1.6rem;

    &::placeholder {
      color: $gray;
    }
  }
  .plus-btn {
    position: absolute;
    right: 1.2rem;
    cursor: pointer;
  }
}
</style>
