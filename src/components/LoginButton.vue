<template>
    <div>
        <b-button>
          <b-img v-bind:src="oauth_logo_img" rounded alt="Rounded image"></b-img>
          kakao 로 간편로그인 하기
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
  },
};
</script>

<style scoped>
b-img {
 margin-left: 100;
}
</style>
