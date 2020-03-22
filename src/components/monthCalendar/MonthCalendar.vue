<template>
  <div id="monthCalendar">
    <p id="month">{{ new Date().getMonth()+1 }} 월</p>
    <table id="monthTable">
      <tr>
        <td
          v-for="day in ['일','월', '화', '수', '목', '금', '토'] "
          :key="day"
          id="day"
        >
          {{ day }}
        </td>
      </tr>
      <tr
        v-for="i in 5"
        :key="i"
      >
        <td
          v-for="j in 7"
          :key="j"
        >
          <DayListItem :day-list-item-id="getCurrentDay(getFirstDay(),j-1+7*(i-1))" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DayListItem from './DayListItem.vue';

export default {
  name: 'MonthCalendar',
  methods: {
    getFirstDay() {
      const today = new Date();
      const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
    getCurrentDay(firstDay, idx) {
      const currentDay = firstDay;
      currentDay.setDate(firstDay.getDate() + idx);
      return currentDay;
    },
  },
  components: {
    DayListItem,
  },
};
</script>

<style scoped>
#monthTable {
  width: 100%;
  height: 100%;
}
#month, #day {
  text-align: center;
}

</style>
