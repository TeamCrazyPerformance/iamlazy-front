<template>
  <div id="monthCalendar">
    <p id="month">
      {{ month }} 월
    </p>
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
          <DayListItem :day-list-item-id="getDayFromFirstDayToIdx(j-1+7*(i-1))" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DayListItem from './DayListItem.vue';

export default {
  name: 'MonthCalendar',
  computed: {
    today() {
      return new Date();
    },
    month() {
      return this.today.getMonth() + 1;
    },
    firstDayInMonth() {
      const firstDay = new Date(this.today.getFullYear(), this.today.getMonth(), 1);
      firstDay.setDate(firstDay.getDate() - firstDay.getDay());
      return firstDay;
    },
  },
  methods: {
    getDayFromFirstDayToIdx(idx) {
      const currentDay = new Date(this.firstDayInMonth);
      currentDay.setDate(this.firstDayInMonth.getDate() + idx);
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
