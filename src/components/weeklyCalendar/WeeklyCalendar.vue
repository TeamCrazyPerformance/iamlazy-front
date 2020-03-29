<template>
  <div id="weeklyCalendar">
    <div id="dayList">
      <WeeklyDayListItem
        v-for="(dayInWeek,idx) in daysInWeek"
        :key="idx"
        :day-list-item-id="dayInWeek"
      />
    </div>
  </div>
</template>

<script>
import WeeklyDayListItem from './WeeklyDayListItem.vue';

export default {
  name: 'WeekCalendar',
  components: {
    WeeklyDayListItem,
  },
  computed: {
    today() {
      return new Date();
    },
    firstDayInWeek() {
      const firstDay = new Date(this.today.getFullYear(), this.today.getMonth(),
        this.today.getDate());
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
    daysInWeek() {
      const days = [...Array(7).keys()].map((x) => new Date(this.firstDayInWeek.getFullYear(),
        this.firstDayInWeek.getMonth(), this.firstDayInWeek.getDate() + x + 1));
      return days;
    },
  },
};
</script>

<style scoped>
#weeklyCalendar {
  margin: 5px;
  padding: 10px;
}
</style>
