<template>
<div id="home">
  <div id="logo">
    <h1>"I am Lazy"</h1>
    <br>
    <p>if you think you are lazy, Try to use this app.</p>
  </div>
  <div id="loginList">
    <LoginButton oauth_msg="kakao"></LoginButton><br>
    <LoginButton oauth_msg="naver"></LoginButton><br>
    <LoginButton oauth_msg="google"></LoginButton><br>
  </div>
</div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';

export default {
  data() {
    return {
    };
  },
  name: 'Home',
  components: {
    LoginButton,
  },
};
</script>

<style scoped>
#logo {
  padding-bottom: 60px;
}
</style>
