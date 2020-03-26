<template>
  <div id="calendar">
    <div id="weeklyOrMonthlyShow">
      <input
        type="radio"
        value="weekly"
        v-model="weeklyOrMonthlyShow"
        checked
      >
      <label for="weekly">주</label>
      <input
        type="radio"
        value="monthly"
        v-model="weeklyOrMonthlyShow"
      >
      <label for="monthly">월</label>
    </div>
    <WeeklyCalendar v-show="weeklyOrMonthlyShow=='weekly'" />
    <MonthlyCalendar v-show="weeklyOrMonthlyShow=='monthly'" />
  </div>
</template>

<script>
import WeeklyCalendar from '../components/weeklyCalendar/WeeklyCalendar.vue';
import MonthlyCalendar from '../components/monthlyCalendar/MonthlyCalendar.vue';

export default {
  name: 'Calendar',
  data() {
    return {
      weeklyOrMonthlyShow: 'weekly',
    };
  },
  components: {
    WeeklyCalendar,
    MonthlyCalendar,
  },
};
</script>

<style scoped>
#calendar {
    width: 100%;
    height: 100%;
}

#weeklyOrMonthlyShow {
  text-align: right;
}
</style>
