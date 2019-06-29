<template>
  <div>
    <MainHead />
    <div class="container">
      <SideContentContainer>
        <div></div>
      </SideContentContainer>
      <MainContentContainer>
        <nuxt />
      </MainContentContainer>
      <SideContentContainer>
        <div></div>
      </SideContentContainer>
    </div>
  </div>
</template>

<script>
import MainHead from "~/components/top-nav/MainHead.vue";
import MainContentContainer from "~/components/layout/MainContentContainer.vue";
import SideContentContainer from "~/components/layout/SideContentContainer.vue";
export default {
  components: {
    MainHead,
    MainContentContainer,
    SideContentContainer
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  max-height: calc(100vh - 6.4rem);
  overflow: auto;
}
</style>


