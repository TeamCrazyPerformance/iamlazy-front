<template>
  <div id="calendar">
    <div id="nav">
      <div
        id="setting"
      >
        <b-button
          variant="outline-secondary"
          @click="moveSetting"
        >
          설정
        </b-button>
      </div>
      <b-form-radio-group
        id="calendarShowOptions"
        v-model="selectedCalendarType"
        :options="calendarTypes"
        buttons
        button-variant="outline-primary"
        name="radios-btn-default"
      />
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Calendar',
  data() {
    return {
      calendarTypes: [
        { text: '주', value: 'weekly' },
        { text: '월', value: 'monthly' },
      ],
      selectedCalendarType: 'weekly',
    };
  },
  watch: {
    selectedCalendarType: {
      immediate: true,
      handler() {
        this.$router.push(`/calendar/${this.selectedCalendarType}`);
      },
    },
  },
  methods: {
    moveSetting() {
      this.$router.push('setting');
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
