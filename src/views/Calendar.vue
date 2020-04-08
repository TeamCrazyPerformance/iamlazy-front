<template>
  <div id="calendar">
    <div id="nav">
      <div
        id="setting"
      >
        <b-button
          variant="outline-secondary"
          @click="goSetting"
        >
          설정
        </b-button>
      </div>
      <b-form-radio-group
        id="calendarShowOptions"
        v-model="calendarType"
        :options="calendarTypeOptions"
        buttons
        button-variant="outline-primary"
      />
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  data() {
    return {
      calendarTypeOptions: [
        { text: '주', value: 'Weekly' },
        { text: '월', value: 'Monthly' },
      ],
      calendarType: 'Weekly',
    };
  },
  watch: {
    calendarType: {
      immediate: true,
      handler() {
        this.$router.push({ name: this.calendarType });
      },
    },
  },
  methods: {
    goSetting() {
      this.$router.push({ name: 'Setting' });
    },
  },
  beforeCreate() {
    this.$store.dispatch('registerToken', this.$route.query.token);
  },
};
</script>

<style scoped>
#calendar {
    width: 100%;
    height: 100%;
}

#nav {
  padding: 15px;
}

#setting {
  display: inline-block;
  width: 50%;
  text-align: left;
}
#calendarShowOptions {
  display: inline-block;
  width: 50%;
  text-align: right;
}
</style>
