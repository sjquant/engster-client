<template>
  <div class="profile-edit-item" :class="{editable: editable}">
    <div v-show="!editable">
      <label>{{ label }}</label>
      <div class="value-container">
        <span>{{ value }}</span>
        <button @click.prevent="editItem">수정</button>
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
        <button @click.prevent="editable=!editable">저장</button>
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