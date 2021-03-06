<template>
  <div>
    <slot />
    <div class="alert-list">
      <transition-group name="alert-transition">
        <Alert v-for="alert in alerts" v-bind="alert" :key="alert.timestamp" />
      </transition-group>
    </div>
  </div>
</template>
<script>
import Alert from "../components/common/Alert.vue";

export default {
  name: "Wrapper",
  components: {
    Alert
  },
  computed: {
    alerts() {
      return [...this.$store.state.common.alerts].reverse();
    }
  }
};
</script>
<style lang="scss" scoped>
.alert-list {
  position: fixed;
  right: 0;
  bottom: 0;

  .alert-transition-enter-active,
  .alert-transition-leave-active {
    transition: all 0.5s;
  }
  .alert-transition-enter,
  .alert-transition-leave-to {
    opacity: 0;
    transform: translateY(3.2rem);
  }

  .alert-transition-move {
    transition: transform 0.4s;
  }
}
</style>
