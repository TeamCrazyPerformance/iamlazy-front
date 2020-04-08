<template>
  <div id="monthlyCalendar">
    <p id="month">
      {{ month }}
    </p>
    <table id="monthlyCalendarTable">
      <tr>
        <td
          v-for="(dayOption,idx) in dayOptions"
          :key="idx"
        >
          {{ dayOption }}
        </td>
      </tr>
      <tr
        v-for="(datesInWeek,idx) in datesInWeeks"
        :key="idx"
      >
        <td
          v-for="(dateInWeek,idx2) in datesInWeek"
          :key="idx2"
        >
          <monthly-date-list-item :date-list-item-date="dateInWeek" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import MonthlyDateListItem from './MonthlyDateListItem.vue';

export default {
  name: 'MonthlyCalendar',
  components: {
    MonthlyDateListItem,
  },
  data() {
    return {
      dayOptions: ['일', '월', '화', '수', '목', '금', '토'],
    };
  },
  computed: {
    month() {
      const today = new Date();
      return `${today.getMonth() + 1} 월`;
    },
    datesInWeeks() {
      const today = new Date();
      const firstDateInMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      firstDateInMonth.setDate(firstDateInMonth.getDate() - firstDateInMonth.getDay());
      return [...Array(5).keys()].map((x) => [...Array(7).keys()].map((y) => new Date(
        firstDateInMonth.getFullYear(), firstDateInMonth.getMonth(),
        firstDateInMonth.getDate() + y + 7 * x,
      )));
    },
  },
};
</script>

<style scoped>
#monthlyCalendar {
  margin: 5px;
  padding: 5px;
  height: 80%;
  text-align: center;
}
#monthlyCalendarTable {
  width: 100%;
  height: 90%;
}
#month {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 0px;
  font-size: 20px;
}
</style>
