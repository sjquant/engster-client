<template>
  <div>
    <TheHeader />
    <div class="body-container" id="body-container">
      <TheContainerSide>
        <div></div>
      </TheContainerSide>
      <TheContainerCenter>
        <nuxt />
      </TheContainerCenter>
      <TheContainerSide>
        <div></div>
      </TheContainerSide>
    </div>
    <div class="alert-list">
      <transition-group name="alert-fade">
        <Alert v-for="alert in alerts" v-bind="alert" :key="alert.id" />
      </transition-group>
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheContainerCenter from "../components/TheContainerCenter.vue";
import TheContainerSide from "../components/TheContainerSide.vue";
import Alert from "../components/common/Alert.vue";
import { mapState } from "vuex";

export default {
  components: {
    TheHeader,
    TheContainerCenter,
    TheContainerSide,
    Alert
  },
  computed: {
    ...mapState("common", ["alerts"])
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  display: flex;
  justify-content: center;
  overflow: auto;
  padding-top: 2.4rem;
}

.alert-list {
  position: fixed;
  right: 0;
  bottom: 0;

  .alert-fade-enter-active,
  .alert-fade-leave-active {
    transition: all 0.5s;
  }
  .alert-fade-enter,
  .alert-fade-leave-to {
    opacity: 0;
    transform: translateY(3.2rem);
  }
}
</style>
