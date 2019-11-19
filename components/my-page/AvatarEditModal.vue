<template>
  <modal name="avatar-edit-modal">
    <section class="cropper-area">
      <vue-cropper ref="cropper" :src="imgSrc" />
    </section>
  </modal>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";

export default {
  components: { VueCropper },
  data() {
    return {
      imgSrc: ""
    };
  },
  methods: {}
};
</script>