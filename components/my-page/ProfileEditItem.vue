<template>
  <div class="profile-edit-item" :class="{editable: editable}">
    <div v-show="!editable">
      <label>{{ label }}</label>
      <div class="value-container">
        <span>{{ value }}</span>
        <button @click.prevent="editable=true">수정</button>
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
            @input="$emit('update:value', $event.target.value)"
            ref="itemInput"
          />
        </div>
        <button class="cancel-btn" @click.prevent="cancel">취소</button>
        <button class="save-btn" @click.prevent="updateItem">저장</button>
      </div>
    </div>
    <div class="error-message" v-show="errors.collect(label).length > 0">{{ errors.first(label) }}</div>
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
    async updateItem() {
      let validated = await this.$validator.validateAll();
      if (validated) {
        this.$emit("update", this.$refs.itemInput.value);
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