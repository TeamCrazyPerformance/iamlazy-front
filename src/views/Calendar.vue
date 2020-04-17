<template>
  <div id="calendar">
    <div id="nav">
      <div
        id="setting"
      >
        <b-button
          variant="outline-secondary"
          @click="goSetting"
        >
          설정
        </b-button>
      </div>
      <b-form-radio-group
        id="calendarShowOptions"
        v-model="calendarType"
        :options="calendarTypeOptions"
        buttons
        button-variant="outline-primary"
      />
    </div>
    <monthly-calendar
      v-show="calendarType == 1"
      :dates-in-month="datesInMonth"
    />
    <weekly-calendar
      v-show="calendarType == 0"
      :dates-in-week="datesInWeek"
    />
  </div>
</template>

<script>
import MonthlyCalendar from '../components/monthlyCalendar/MonthlyCalendar.vue';
import WeeklyCalendar from '../components/weeklyCalendar/WeeklyCalendar.vue';

export default {
  name: 'Calendar',
  components: {
    MonthlyCalendar,
    WeeklyCalendar,
  },
  data() {
    return {
      calendarTypeOptions: [
        { text: '주', value: 0 },
        { text: '월', value: 1 },
      ],
      calendarType: 0,
    };
  },
  computed: {
    datesInMonth() {
      const today = new Date();
      const firstDateInMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      firstDateInMonth.setDate(firstDateInMonth.getDate() - firstDateInMonth.getDay());
      return [...Array(5).keys()].map((x) => [...Array(7).keys()].map((y) => new Date(
        firstDateInMonth.getFullYear(), firstDateInMonth.getMonth(),
        firstDateInMonth.getDate() + y + 7 * x,
      )));
    },
    datesInWeek() {
      const today = new Date();
      const firstDateInWeek = new Date(
        today.getFullYear(), today.getMonth(), today.getDate() - today.getDay(),
      );
      return [...Array(7).keys()].map((x) => new Date(firstDateInWeek.getFullYear(),
        firstDateInWeek.getMonth(), firstDateInWeek.getDate() + x + 1));
    },
  },
  methods: {
    goSetting() {
      this.$router.push({ name: 'Setting' });
    },
  },
};
</script>

<style scoped>
#calendar {
    width: 100%;
    height: 100%;
}

#nav {
  padding: 15px;
}

#setting {
  display: inline-block;
  width: 50%;
  text-align: left;
}
#calendarShowOptions {
  display: inline-block;
  width: 50%;
  text-align: right;
}
</style>
