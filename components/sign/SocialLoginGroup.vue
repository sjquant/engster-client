<template>
  <div>
    <GoogleLogin />
    <FacebookLogin />
    <NaverLogin />
  </div>
</template>
<script>
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import NaverLogin from "./NaverLogin";
export default {
  components: {
    GoogleLogin,
    FacebookLogin,
    NaverLogin
  }
};
</script>
