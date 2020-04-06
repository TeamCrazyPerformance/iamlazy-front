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
        v-for="(daysInWeek,idx) in daysInWeeks"
        :key="idx"
      >
        <td
          v-for="(dayInWeek,idx2) in daysInWeek"
          :key="idx2"
        >
          <monthly-day-list-item :day-list-item-day="dayInWeek" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import MonthlyDayListItem from './MonthlyDayListItem.vue';

export default {
  name: 'MonthlyCalendar',
  components: {
    MonthlyDayListItem,
  },
  data() {
    return {
      dayOptions: ['일', '월', '화', '수', '목', '금', '토'],
    };
  },
  computed: {
    today() {
      return new Date();
    },
    month() {
      return this.today.getMonth() + 1;
    },
    daysInWeeks() {
      return [...Array(5).keys()].map((x) => this.getDaysInWeek(x));
    },
    firstDayInMonth() {
      const firstDay = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
  },
  methods: {
    getDaysInWeek(week) {
      const days = [...Array(7).keys()].map((x) => new Date(this.firstDayInMonth.getFullYear(),
        this.firstDayInMonth.getMonth(), this.firstDayInMonth.getDate() + x + 7 * week));
      return days;
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
