<template>
  <div class="container">
    <input
      class="input"
      type="text"
      placeholder="자신만의 번역을 추가해보세요!"
      :value="translation"
      @keyup.enter="createTranslation"
      @focus="checkLogin"
      @input="e => $emit('input', e.target.value)"
    />
    <div class="plus-btn" @click="createTranslation">
      <PlusIcon />
    </div>
  </div>
</template>

<script>
import PlusIcon from "./icons/PlusIcon.vue";
import { mapState } from "vuex";
export default {
  components: {
    PlusIcon
  },
  props: {
    lineid: Number,
    translation: String
  },
  computed: {
    ...mapState("user", ["user"])
  },
  methods: {
    checkLogin() {
      if (!this.user) {
        this.$router.push({ path: "/sign-in" });
      }
    },
    async createTranslation() {
      this.$emit("create-translation", this.translation);
    }
  }
};
</script>

<style lang="scss" scoped>
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
