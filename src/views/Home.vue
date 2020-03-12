<template>
<div id="home">
  <div id="logo">
    <h1>"I am Lazy"</h1>
    <br>
    <p>if you think you are lazy, Try to use this app.</p>
  </div>
  <div id="loginList">
    <LoginButton></LoginButton><br>
    <LoginButton></LoginButton><br>
    <LoginButton></LoginButton><br>
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
