<template>
<div id="home">
  <div id = "logo">
    <img id="logoImg" src="../../public/logo.png"/>
  </div>
  <LoginButton></LoginButton>
</div>
</template>

<script>
import LoginButton from '@/components/LoginButton.vue';

export default {
  name: 'Home',
  components: {
    LoginButton,
  },
};
</script>

<style>
#home {
  width: 100%;
  height: 100%;
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
