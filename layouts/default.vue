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
  </div>
</template>

<script>
import TheHeader from "~/components/TheHeader.vue";
import TheContainerCenter from "~/components/TheContainerCenter.vue";
import TheContainerSide from "~/components/TheContainerSide.vue";
export default {
  components: {
    TheHeader,
    TheContainerCenter,
    TheContainerSide
  }
};
</script>

<style lang="scss" scoped>
.body-container {
  display: flex;
  justify-content: center;
  height: calc(100vh - 6.4rem);
  overflow: auto;
  padding-top: 2.4rem;
}
</style>


