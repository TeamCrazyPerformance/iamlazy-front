<template>
  <div id="monthlyCalendar">
    <p id="month">
      {{ month }} 월
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
        v-for="(datesInWeek,idx) in datesInMonth"
        :key="idx"
      >
        <td
          v-for="(date,idx2) in datesInWeek"
          :key="idx2"
        >
          <monthly-date-list-item :date-list-item-date="date" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import MonthlyDateListItem from './MonthlyDateListItem.vue';

export default {
  name: 'MonthlyCalendar',
  props: {
    datesInMonth: {
      type: Array,
      default: null,
    },
  },
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
      return new Date().getMonth() + 1;
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
