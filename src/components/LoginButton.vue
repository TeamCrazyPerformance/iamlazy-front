<template>
    <div>
        <b-button @click="onSubmit">
          <b-img v-bind:src="oauth_logo_img" rounded alt="Rounded image"></b-img>
          {{ oauth_msg }} 로 간편로그인 하기
        </b-button>
    </div>
</template>

<script>
/* eslint linebreak-style: ["error", "windows"] */
export default {
  data() {
    return {
      oauth_logo_img: null,
    };
  },
  name: 'LoginButton',
  props: {
    oauth_msg: null,
  },
  methods: {
    onSubmit() {
      this.$router.push('./login');
    },
  },
};
</script>

<style scoped>
b-img {
 margin-left: 100;
}
</style>
