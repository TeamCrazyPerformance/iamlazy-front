<template>
  <div id="weeklyCalendar">
    <div id="dateList">
      <WeeklyDateListItem
        v-for="(date,idx) in datesInWeek"
        :key="idx"
        :date-list-item-date="date"
      />
    </div>
  </div>
</template>

<script>
import WeeklyDateListItem from './WeeklyDateListItem.vue';

export default {
  name: 'WeekCalendar',
  computed: {
    datesInWeek() {
      const today = new Date();
      const firstDateInWeek = new Date(
        today.getFullYear(), today.getMonth(), today.getDate() - today.getDay(),
      );
      return [...Array(7).keys()].map((x) => new Date(firstDateInWeek.getFullYear(),
        firstDateInWeek.getMonth(), firstDateInWeek.getDate() + x + 1));
    },
  },
  components: {
    WeeklyDateListItem,
  },
};
</script>

<style scoped>
#weeklyCalendar {
  margin: 5px;
  padding: 10px;
}
</style>
