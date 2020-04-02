<template>
  <div id="login">
    <div id="logo">
      <img
        id="logoImg"
        src="../../public/logo.png"
      >
    </div>
    <kakao-login-button />
    <a href="http://121.130.167.189:8092/oauth2/authorize/kakao?redirect_uri=http://localhost:8080/oauth/redirect">login</a>
  </div>
</template>

<script>
import KakaoLoginButton from '../components/KakaoLoginButton.vue';

export default {
  name: 'Login',
  components: {
    KakaoLoginButton,
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  text-align: center;
}
#logo {
  width: 100%;
  height: 60%;
}
#logoImg {
  width: 100%;
  margin-top: 40%;
}
</style>
