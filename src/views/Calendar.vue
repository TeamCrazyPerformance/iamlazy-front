<template>
  <div id="calendar">
    <div id="weekOrMonthShow">
      <input
        type="radio"
        value="week"
        v-model="weekOrMonthShow"
        checked
      >
      <label for="week">주</label>
      <input
        type="radio"
        value="month"
        v-model="weekOrMonthShow"
      >
      <label for="month">월</label>
    </div>
    <WeekCalendar v-show="weekOrMonthShow=='week'" />
    <MonthCalendar v-show="weekOrMonthShow=='month'" />
  </div>
</template>

<script>
import WeekCalendar from '../components/weekCalendar/WeekCalendar.vue';
import MonthCalendar from '../components/monthCalendar/MonthCalendar.vue';

export default {
  name: 'Calendar',
  data() {
    return {
      weekOrMonthShow: 'week',
    };
  },
  components: {
    WeekCalendar,
    MonthCalendar,
  },
};
</script>

<style scoped>
#calendar {
    width: 100%;
    height: 100%;
}

#weekOrMonthShow {
  text-align: right;
}
</style>
