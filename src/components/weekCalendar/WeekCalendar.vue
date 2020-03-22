<template>
  <div id="weekCalendar">
    <div id="dayList">
      <DayListItem
        v-for="i in 7"
        :key="i"
        :day-list-item-id="getCurrentDay(getFirstDay(),i-1)" />
    </div>
  </div>
</template>

<script>
import DayListItem from './DayListItem.vue';

export default {
  name: 'WeekCalendar',
  components: {
    DayListItem,
  },
  methods: {
    getCurrentDay(firstDay, idx) {
      const currentDay = firstDay;
      currentDay.setDate(firstDay.getDate() + idx);
      return currentDay;
    },
    getFirstDay() {
      const today = new Date();
      const firstDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
  },
};
</script>

<style scoped>
#weekCalendar {
  margin: 5px;
}
</style>
