<template>
  <div class="admin-container">
    <admin-nav></admin-nav>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import AdminNav from "../components/admin/AdminNav";
import { mapMutations } from "vuex";

export default {
  layout: "wrap-center",
  components: {
    AdminNav
  }
};
</script>