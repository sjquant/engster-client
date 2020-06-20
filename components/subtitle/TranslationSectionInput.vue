<template>
  <div class="container">
    <input
      class="input"
      ref="input"
      type="text"
      :placeholder="placeholder"
      :value="translation"
      @keyup.enter="createTranslation"
      @focus="checkLogin"
      @input="inputTranslation"
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
  data() {
    return {
      translation: ""
    };
  },
  props: {
    placeholder: {
      type: String
    },
    lineid: {
      type: Number
    }
  },
  computed: {
    ...mapState("auth", ["user"])
  },
  methods: {
    ...mapActions("subtitle", ["CREATE_TRANSLATION"]),
    checkLogin() {
      if (!this.user) {
        this.$router.push({ path: "/sign-in" });
      }
    },
    async createTranslation() {
      if (this.translation) {
        await this.CREATE_TRANSLATION({
          lineid: this.lineid,
          translation: this.translation
        });
      }
      this.translation = "";
    },
    inputTranslation(e) {
      this.translation = e.target.value;
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
