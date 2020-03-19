<template>
    <div id = 'calendar'>
        <div id='flag_info'>
          <input type="radio" value="week" v-model="weekOrMonthShow" checked>
          <label for="week">주</label>
          <input type="radio" value="month" v-model="weekOrMonthShow">
          <label for="month">월</label>
        </div>
          <WeekCalendar v-show="weekOrMonthShow=='week'">
          </WeekCalendar>
    </div>
</template>

<script>
import WeekCalendar from '../components/weekCalendar/WeekCalendar.vue';

export default {
  name: 'Calendar',
  data() {
    return {
      weekOrMonthShow: 'week',
    };
  },
  components: {
    WeekCalendar,
  },
};
</script>

<style>
#calendar {
    width: 100%;
    height: 100%;
}

#flag_info {
  text-align: right;
}

ul {
  list-style:none;
  padding-left:0px;
}
</style>
