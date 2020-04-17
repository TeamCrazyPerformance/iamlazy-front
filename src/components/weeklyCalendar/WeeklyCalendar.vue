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
  props: {
    datesInWeek: {
      type: Array,
      default: null,
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
