<template>
  <div>
    <label class="label">{{ label }}</label>
    <input
      class="base-input"
      :type="type"
      :name="label"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
      ref="input"
    />
    <div class="error-message">
      {{ error }}
    </div>
  </div>
</template>
<script>
export default {
  $_veeValidate: {
    value() {
      console.log(this.value);
      return this.value;
    },
    name() {
      return this.label;
    }
  },
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
    type: {
      type: String,
      default: "text"
    },
    validate: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: String,
      default: "on"
    },
    error: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~utils";

.label {
  display: block;
}

input.base-input {
  width: 100%;
  margin-top: 0.8rem;
  margin-bottom: 1.6rem;
  padding: 0 0.8rem;
  font-size: 1.6rem;
  line-height: 2.5;
  border: 1px solid $gray;

  &:focus {
    border-color: $gray-darkest;
  }
}
</style>
