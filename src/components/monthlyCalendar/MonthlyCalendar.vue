<template>
  <div id="monthlyCalendar">
    <p id="month">
      {{ month }} 월
    </p>
    <table id="monthTable">
      <tr>
        <td
          v-for="(day,idx) in dayOfWeek"
          :key="idx"
          id="day"
        >
          {{ day }}
        </td>
      </tr>
      <tr
        v-for="(weekInMonth,idx) in weeksInMonth"
        :key="idx"
      >
        <td
          v-for="(dayInWeek,idx2) in weekInMonth"
          :key="idx2"
        >
          <monthly-day-list-item :day-list-item-id="dayInWeek" />
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
  computed: {
    today() {
      return new Date();
    },
    dayOfWeek() {
      return ['일', '월', '화', '수', '목', '금', '토'];
    },
    month() {
      return this.today.getMonth() + 1;
    },
    weeksInMonth() {
      return [...Array(5).keys()].map((x) => this.daysInWeek(x));
    },
    firstDayInMonth() {
      const firstDay = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
  },
  methods: {
    daysInWeek(week) {
      const days = [...Array(7).keys()].map((x) => new Date(this.firstDayInMonth.getFullYear(),
        this.firstDayInMonth.getMonth(), this.firstDayInMonth.getDate() + x + 7 * week));
      return days;
    },
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
