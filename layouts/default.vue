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
import { mapState } from "vuex";

export default {
  components: {
    TheHeader,
    TheContainerCenter,
    TheContainerSide,
    Wrapper
  },
  mounted() {
    this._interval = setInterval(() => {
      if (this.user) {
        this.$store.dispatch("user/VALIDATE_TOKEN");
      }
    }, 3600000);
  },
  beforeDestroy() {
    clearInterval(this._interval);
  },
  computed: {
    ...mapState("user", ["user"])
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
