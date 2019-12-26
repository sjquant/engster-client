<template>
  <article class="main-small-card">
    <nuxt-link to="/my-page" class="card-link">
      <section class="card-text">
        <h1>{{title}}</h1>
        <p class="description">{{ description }}</p>
      </section>
      <img :src="photo" />
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
.main-small-card {
  margin-top: 1.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-bottom: 1.2rem;
  .card-link {
    display: flex;
    justify-content: space-between;
  }
  .card-text {
    padding-right: 1.6rem;
    h1 {
      margin-top: 0;
      margin-bottom: 0.4rem;
    }
    p.description {
      max-height: 5.2rem;
      margin: 0;
      color: $gray-darker;
      font-size: 1.4rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  img {
    width: 8rem;
    height: 8rem;
    object-fit: cover;
  }
}
</style>