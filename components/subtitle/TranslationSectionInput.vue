<template>
  <div class="container">
    <input
      class="input"
      ref="input"
      type="text"
      :placeholder="placeholder"
      @keyup.enter="createTranslation"
      @focus="checkLogin"
    />
    <div class="plus-btn" @click="createTranslation">
      <PlusIcon />
    </div>
  </div>
</template>

<script>
import PlusIcon from "../icons/PlusIcon.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    PlusIcon
  },
  props: {
    placeholder: {
      type: String
    }
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    checkLogin() {
      if (!this.user) {
        this.$router.push({ path: "/sign-in" });
      }
    },
    createTranslation() {
      let translation = this.$refs.input.value;
      if (translation !== "") {
        this.CREATE_TRANSLATION({ lineid: this.line.id, translation });
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
