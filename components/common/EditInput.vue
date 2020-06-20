<template>
  <section class="container" :class="{editable: editable}">
    <div v-show="!editable">
      <label>{{ label }}</label>
      <div class="input-container">
        <span>{{ value }}</span>
        <button @click.prevent="editable=true">수정</button>
      </div>
    </div>
    <div v-show="editable">
      <slot name="input">
        <label>{{ label }}</label>
        <div class="input-container">
          <div>
            <input
              v-validate="validate"
              :type="inputType"
              :name="label"
              :placeholder="placeholder"
              :value="value"
              @input="$emit('update:value', $event.target.value)"
              ref="input"
            />
          </div>
          <button class="cancel-btn" @click.prevent="cancel">취소</button>
          <button class="save-btn" @click.prevent="save">저장</button>
        </div>
        <div
          class="error-message"
          v-show="errors.collect(label).length > 0"
        >{{ errors.first(label) }}</div>
      </slot>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    validate: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      editable: false
    };
  },
  methods: {
    async save() {
      let validated = await this.$validator.validateAll();
      if (validated) {
        this.$emit("save", this.$refs.input.value);
        this.editable = false;
      }
    },
    cancel() {
      this.editable = false;
      this.$emit("update:value", null);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";
.container {
  width: 100%;
  margin-top: 0.8rem;

  label {
    color: $gray-darker;
  }

  div.input-container {
    height: 4.8rem;
    padding: 0.8rem 0;
    line-height: 2;
    border-bottom: 1px solid $gray-dark;
    margin-bottom: 1.6rem;
    display: flex;
    justify-content: space-between;

    > div {
      flex: 1;
    }

    input {
      display: block;
      border: 0;
      font-size: 1.6rem;
      height: 3.2rem;
      width: 100%;
    }

    > span {
      height: 3.2rem;
    }
  }
  button {
    @include default-button();
    color: $gray-darker;
    border-color: $gray-darker;
    &:hover {
      color: $gray-darkest;
      border-color: $gray-darkest;
      transition: all 0.1s ease-in;
    }
  }

  &.editable {
    div.input-container {
      border-color: $gray-darker;
      transition: all 0.1s ease-in;
      > button {
        &.cancel-btn {
          margin-right: 0.8rem;
        }
      }
    }
  }
}
</style>