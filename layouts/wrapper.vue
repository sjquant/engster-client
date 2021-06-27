<template>
  <div>
    <portal-target name="outmost" />
    <slot />
    <div class="alert-list">
      <transition-group name="alert-transition">
        <Alert v-for="alert in alerts" v-bind="alert" :key="alert.timestamp" />
      </transition-group>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Alert from "../components/ToastAlert.vue";

export default {
  name: "Wrapper",
  components: {
    Alert
  },
  created() {
    // Validate First
    if (this.user) this.$store.dispatch("user/VALIDATE_TOKEN");
    this._interval = setInterval(() => {
      if (this.user) {
        this.$store.dispatch("user/VALIDATE_TOKEN");
      }
    }, 3600000);
  },
  computed: {
    ...mapState("user", ["user"]),
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
