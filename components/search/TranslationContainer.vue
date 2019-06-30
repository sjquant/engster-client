<template>
  <div>
    <CommentInput
      ref="commentInput"
      :placeholder="inputPlaceholder"
      @comment-created="(value) => $emit('comment-created', value)"
    ></CommentInput>
    <TranslationCard :comments="comments"></TranslationCard>
  </div>
</template>
<script>
import CommentInput from "../common/CommentInput.vue";
import TranslationCard from "./TranslationCard.vue";
export default {
  components: {
    CommentInput,
    TranslationCard
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    comments: {
      type: Array
    }
  }
};
</script>
