<template>
  <div id="home">
    <div id="logo">
      <img
        id="logoImg"
        src="../../public/logo.png"
      >
    </div>
    <Login />
  </div>
</template>

<script>
import Login from '../components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
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
