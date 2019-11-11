<template>
  <div class="profile-edit-item" :class="{editable: editable}">
    <div v-show="!editable">
      <label>{{ label }}</label>
      <div class="value-container">
        <span>{{ value }}</span>
        <button @click="editItem">수정</button>
      </div>
    </div>
    <div v-show="editable">
      <label>{{ label }}</label>
      <div class="value-container">
        <div>
          <input
            v-validate="inputValidate"
            :type="inputType"
            :name="label"
            :placeholder="placeholder"
            :value="value"
            ref="itemInput"
          />
          <div
            class="profile-edit-error-message"
            v-show="errors.collect(label).length > 0"
          >{{ errors.first(label) }}</div>
        </div>
        <button @click="editable=!editable">저장</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editable: false
    };
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    inputType: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    inputValidate: {
      type: String,
      default: "required"
    }
  },
  methods: {
    editItem() {
      this.editable = !this.editable;
      this.$nextTick(() => this.$refs.itemInput.select());
    }
  }
};
</script>

<style lang="scss">
@import "~utils";

.profile-edit-item {
  width: 100%;
  margin-top: 0.8rem;

  label {
    color: $gray-darker;
  }

  input {
    display: block;
    border: 0;
    width: 100%;
    font-size: 1.6rem;
    height: 3.2rem;
  }

  div.value-container {
    height: 4.8rem;
    padding: 0.8rem 0;
    line-height: 2;
    border-bottom: 1px solid $gray-light;
    display: flex;
    justify-content: space-between;

    > span {
      height: 3.2rem;
    }
    > button {
      margin-left: 2.4rem;
      padding: 0 0.8rem;
      color: $gray-dark;
      border: $gray-light solid 1px;
      border-radius: 2px;
      &:hover {
        color: $gray-darker;
        border-color: $gray-darker;
        transition: 0.1;
      }
    }
  }

  &.editable {
    div.value-container {
      border-color: $gray-dark;
      transition: 0.1;
      > button {
        color: $gray-dark;
        border-color: $gray-dark;
        &:hover {
          color: $gray-darker;
          border-color: $gray-darker;
          transition: 0.1;
        }
      }
    }
  }
}
</style>