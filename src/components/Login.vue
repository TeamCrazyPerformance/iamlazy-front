<template>
  <img
    id="loginImg"
    src="//mud-kage.kakao.com/14/dn/btqbjxsO6vP/KPiGpdnsubSq3a0PHEGUK1/o.jpg"
    @click="loginWithKakao()"
  >
</template>

<script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>

<script>
const kakaoAPI ='95883d28e87701fe86b707e0b9fc768a';

export default {
  name: 'Login',
  methods: {
    loginWithKakao() {
      Kakao.init(kakaoAPI);
      Kakao.Auth.login({
        success: function(authObj) {
          alert(JSON.stringify(authObj));
        },
        fail: function(err) {
          alert('로그인에 실패했습니다.');
        }
      });
      this.$router.push('calendar');
    }
  },
};
</script>

<style>
#loginImg {
  width: 80%;
}
</style>
