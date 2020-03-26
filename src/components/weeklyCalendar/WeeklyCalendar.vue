<template>
  <div id="weeklyCalendar">
    <div id="dayList">
      <WeeklyDayListItem
        v-for="i in 7"
        :key="i"
        :day-list-item-id="getDayFromFirstDayToIdx(i-1)"
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
    firstDay() {
      const firstDay = new Date(this.today.getFullYear(), this.today.getMonth(),
        this.today.getDate());
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
  },
  methods: {
    getDayFromFirstDayToIdx(idx) {
      const currentDay = new Date(this.firstDay);
      currentDay.setDate(this.firstDay.getDate() + idx);
      return currentDay;
    },
  },
};
</script>

<style scoped>
#weeklyCalendar {
  margin: 5px;
}
</style>
