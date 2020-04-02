<template>
  <div id="setting">
    <b-button
      variant="outline-secondary"
      id="back"
      @click="goBack()"
    >
      &lsaquo;
    </b-button>
    <p>설정</p>
    <b-form
      id="statistics"
      @submit="onSubmit"
    >
      <b-form-checkbox
        v-model="form.statisticsShow"
      >
        통계값을 볼래요.
      </b-form-checkbox>
      <b-form-checkbox
        v-show="form.statisticsShow"
        v-model="form.achiveStatisticsShow"
      >
        달성율을 볼래요.
      </b-form-checkbox>
      <b-form-checkbox
        v-show="form.statisticsShow"
        v-model="form.failStatisticsShow"
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
      form: {
        statisticsShow: true,
        achiveStatisticsShow: true,
        failStatisticsShow: true,
      },
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
#back {
 vertical-align: top;
}
#statistics {
  padding: 10px;
}
</style>
