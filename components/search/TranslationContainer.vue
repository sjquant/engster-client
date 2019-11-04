<template>
  <div>
    <comment-input
      ref="commentInput"
      :placeholder="inputPlaceholder"
      @comment-created="(value) => $emit('comment-created', value)"
      @focus="checkLogin"
    ></comment-input>
    <comment-container>
      <TranslationCard :comment="each" v-for="each in translations" :key="each.id"></TranslationCard>
    </comment-container>
  </div>
</template>
<script>
import CommentInput from "../common/CommentInput.vue";
import TranslationCard from "./TranslationCard.vue";
import CommentContainer from "../common/CommentContainer";
import { mapState } from "vuex";

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
    transResult: {
      type: Object
    }
  },
  computed: {
    ...mapState("auth", ["user"]),
    translations() {
      if (this.transResult) {
        return this.transResult.translations;
      } else {
        return null;
      }
    }
  },
  methods: {
    checkLogin() {
      if (!this.user) {
        this.$router.push({ path: "/sign-in" });
      }
    }
  }
};
</script>
