<template>
  <div class="container">
    <input
      class="input"
      ref="input"
      type="text"
      placeholder="자신만의 번역을 추가해보세요!"
      :value="translation"
      @keyup.enter="$emit('create-translation', translation)"
      @focus="checkLogin"
      @input="e => $emit('input', e.target.value)"
    />
    <div class="plus-btn" @click="$emit('create-translation', translation)">
      <PlusIcon />
    </div>
  </div>
</template>

<script>
import PlusIcon from "../icons/PlusIcon.vue";
import { mapState } from "vuex";

export default {
  components: {
    PlusIcon
  },
  props: {
    subtitleId: Number,
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
