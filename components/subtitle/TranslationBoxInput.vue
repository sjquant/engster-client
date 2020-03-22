<template>
  <div class="container">
    <input
      class="input"
      ref="input"
      type="text"
      :placeholder="placeholder"
      @keyup.enter="createComment"
      @focus="$emit('focus')"
    />
    <div class="plus-btn" @click="createComment">
      <PlusIcon />
    </div>
  </div>
</template>

<script>
import PlusIcon from "../icons/PlusIcon.vue";
export default {
  components: {
    PlusIcon
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

<style scoped lang="scss">
@import "~utils";

.container {
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  .input {
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
