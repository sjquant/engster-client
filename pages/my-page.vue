<template>
  <div class="my-page-container">
    <my-page-header></my-page-header>
    <my-page-nav></my-page-nav>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import MyPageHeader from "../components/my-page/MyPageHeader";
import MyPageNav from "../components/my-page/MyPageNav";

export default {
  components: {
    MyPageHeader,
    MyPageNav
  }
};
</script>

<style lang="scss">
.my-page-container {
  margin-top: 4.8rem;
}
</style>