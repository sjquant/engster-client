<template>
  <div :class="['alert-container', type]">
    <span>
      {{ msg }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
    type: {
      type: String,
      default: "error",
      validator: v => {
        return v.indexOf(["success", "normal", "error"]);
      }
    }
  }
};
</script>
<style lang="scss">
.alert-container {
  width: 40rem;
  margin: 1.6rem 1.6rem;
  padding: 1.6rem 1.6rem;
  word-break: break-all;
  line-height: 1.5;
  border-radius: 4px;
  color: #fff;
  text-align: left;

  &.success {
    background-color: #4caf50;
  }
  &.normal {
    background-color: #22292f;
  }
  &.error {
    background-color: #f56565;
  }
}
</style>
