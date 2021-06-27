<template>
  <portal to="outmost">
    <div class="confirm-dialog" v-if="value">
      <div class="opaque-layer" @click="$emit('input', false)"></div>
      <div class="dialog-container">
        <h2>{{ title }}</h2>
        <p class="message">{{ message }}</p>
        <div class="button-area">
          <button v-show="cancelable" @click="canceled" class="cancel-btn">
            취소
          </button>
          <button @click="confirmed" class="confirm-btn">
            확인
          </button>
        </div>
      </div>
    </div>
  </portal>
</template>
<script>
export default {
  props: {
    title: String,
    message: String,
    cancelable: {
      type: Boolean,
      default: false
    },
    value: Boolean
  },
  methods: {
    canceled() {
      this.$emit("canceled");
      this.$emit("input", false);
    },
    confirmed() {
      this.$emit("confirmed");
    }
  }
};
</script>

<style lang="scss">
@import "~utils";
.confirm-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  .opaque-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .dialog-container {
    width: 40rem;
    border-radius: 4px;
    background: white;
    padding: 1.6rem;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    z-index: 15;

    h2 {
      margin: 0;
      font-size: 2.4rem;
      color: $gray-darkest;
      line-height: 1.5;
      font-weight: bold;
    }

    .message {
      line-height: 1.5;
      font-size: 1.6rem;
      color: $gray-darker;
      margin-top: 1.2rem;
      margin-bottom: 0.8rem;
      white-space: pre-wrap;
    }

    .button-area {
      margin-top: 2rem;
      display: flex;
      justify-content: flex-end;

      button + button {
        margin-left: 0.8rem;
      }

      .cancel-btn {
        @include default-button();
      }

      .confirm-btn {
        @include colored-button($black);
        padding: 0.4rem 2.4rem;
      }
    }
  }
}
</style>
