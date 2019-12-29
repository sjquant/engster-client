<template>
  <article class="main-large-card">
    <nuxt-link to="/main-page/3">
      <img :src="photo" />
      <h1>{{title}}</h1>
      <p class="description">{{ description }}</p>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    photo: {
      type: String
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }
};
</script>

<style lang="scss">
@import "~utils";
.main-large-card {
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  h1 {
    margin-top: 1.2rem;
    margin-bottom: 0.4rem;
  }
  p.description {
    margin-top: 0;
    color: $gray-darker;
    font-size: 1.4rem;
  }
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
}
</style>