<template>
  <Wrapper>
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
  </Wrapper>
</template>

<script>
import Wrapper from "./wrapper.vue";
import TheHeader from "../components/TheHeader.vue";
import TheContainerCenter from "../components/TheContainerCenter.vue";
import TheContainerSide from "../components/TheContainerSide.vue";

export default {
  components: {
    TheHeader,
    TheContainerCenter,
    TheContainerSide,
    Wrapper
  },
  beforeDestroy() {
    clearInterval(this._interval);
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
</style>
