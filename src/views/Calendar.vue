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
    <monthly-calendar
      v-show="calendarType == 1"
    />
    <weekly-calendar
      v-show="calendarType == 0"
    />
  </div>
</template>

<script>
import MonthlyCalendar from '../components/monthlyCalendar/MonthlyCalendar.vue';
import WeeklyCalendar from '../components/weeklyCalendar/WeeklyCalendar.vue';

export default {
  name: 'Calendar',
  components: {
    MonthlyCalendar,
    WeeklyCalendar,
  },
  data() {
    return {
      calendarTypeOptions: [
        { text: '주', value: 0 },
        { text: '월', value: 1 },
      ],
      calendarType: 0,
    };
  },
  methods: {
    goSetting() {
      this.$router.push({ name: 'Setting' });
    },
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
