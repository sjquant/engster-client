<template>
  <div>
    <comment-input
      ref="commentInput"
      :placeholder="inputPlaceholder"
      @comment-created="(value) => $emit('comment-created', value)"
    ></comment-input>
    <comment-container>
      <TranslationCard :comment="comment" v-for="comment in comments" :key="comment.id"></TranslationCard>
    </comment-container>
  </div>
</template>
<script>
import CommentInput from "../common/CommentInput.vue";
import TranslationCard from "./TranslationCard.vue";
import CommentContainer from "../common/CommentContainer";

export default {
  components: {
    CommentInput,
    TranslationCard,
    CommentContainer
  },
  props: {
    inputPlaceholder: {
      type: String
    },
    commentResult: {
      type: Object
    },
    commentKey: {
      type: String,
      default: "comments"
    }
  },
  computed: {
    comments() {
      console.log(this.commentResult);
      if (this.commentResult) {
        return this.commentResult[this.commentKey];
      } else {
        return null;
      }
    }
  }
};
</script>
