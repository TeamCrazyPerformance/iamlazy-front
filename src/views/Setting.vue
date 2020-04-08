<template>
  <div id="setting">
    <b-button
      variant="outline-secondary"
      @click="goBack"
    >
      Back
    </b-button>
    <p>설정</p>
    <b-form
      id="settingContent"
      @submit="onSubmit"
    >
      <b-form-checkbox
        v-model="setting.statisticsYN"
      >
        통계값을 볼래요.
      </b-form-checkbox>
      <b-form-checkbox
        v-show="setting.statisticsYN"
        v-model="setting.achivementYN"
      >
        달성율을 볼래요.
      </b-form-checkbox>
      <b-form-checkbox
        v-show="setting.statisticsYN"
        v-model="setting.failStatisticsShow"
      >
        미달성률을 볼래요.
      </b-form-checkbox>
      <b-button
        type="submit"
        variant="primary"
      >
        확인
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data() {
    return {
      setting: {
        statisticsYN: false,
        achivementYN: false,
        failureYN: false,
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit() {
      alert(JSON.stringify(this.setting));
      this.goBack();
    },
  },
};
</script>

<style scoped>
#setting {
  padding: 5%;
}
#setting * {
  margin-top: 5%;
}
p {
  display: inline-block;
  text-align: center;
  width: 90%;
  margin-bottom: 0px;
  font-size: 25px;
}
#backButton {
 vertical-align: top;
}
#settingContent {
  padding: 10px;
}
</style>
