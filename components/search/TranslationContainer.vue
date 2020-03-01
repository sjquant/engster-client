<template>
  <div>
    <comment-input
      ref="commentInput"
      :placeholder="inputPlaceholder"
      @comment-created="(value) => $emit('comment-created', value)"
      @focus="checkLogin"
    ></comment-input>
    <comment-container v-if="translations">
      <TranslationCard :comment="each" v-for="each in translationsData" :key="each.id" />
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
    lineid: {
      type: Number
    }
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("search", ["translationsForLine"]),
    translations() {
      return this.translationsForLine[this.lineid];
    },
    translationsData() {
      return this.translations ? this.translations.data : [];
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
