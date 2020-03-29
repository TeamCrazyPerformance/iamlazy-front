<template>
  <div id="calendar">
    <div id="nav">
      <div
        id="setting"
      >
        <b-button
          variant="outline-secondary"
          @click="moveSetting"
        >
          설정
        </b-button>
      </div>
      <b-form-radio-group
        id="calendarShowOptions"
        v-model="calendarShow"
        :options="calendarShowOptions"
        buttons
        button-variant="outline-primary"
        name="radios-btn-default"
      />
    </div>
    <WeeklyCalendar v-show="calendarShow=='weekly'" />
    <MonthlyCalendar v-show="calendarShow=='monthly'" />
  </div>
</template>

<script>
import WeeklyCalendar from '../components/weeklyCalendar/WeeklyCalendar.vue';
import MonthlyCalendar from '../components/monthlyCalendar/MonthlyCalendar.vue';

export default {
  name: 'Calendar',
  data() {
    return {
      calendarShowOptions: [
        { text: '주', value: 'weekly' },
        { text: '월', value: 'monthly' },
      ],
      calendarShow: 'weekly',
    };
  },
  components: {
    WeeklyCalendar,
    MonthlyCalendar,
  },
  methods: {
    moveSetting() {
      this.$router.push('setting');
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
