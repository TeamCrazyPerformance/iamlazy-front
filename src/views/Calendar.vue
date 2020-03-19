<template>
    <div id = 'calendar'>
        <div id='flag_info'>
          <input type="radio" value="week" v-model="flag" checked>
          <label for="week">주</label>
          <input type="radio" value="month" v-model="flag">
          <label for="month">월</label>
        </div>
          <Week v-if="flag=='week'">
          </Week>
    </div>
</template>

<script>
import Week from '../components/Week.vue';

export default {
  name: 'Calendar',
  data() {
    return {
      flag: 'week',
    };
  },
  components: {
    Week,
  },
};
</script>

<style>
#calendar {
    width: 100%;
    height: 100%;
}

#flag_info {
  text-align: right;
}

ul {
  list-style:none;
  padding-left:0px;
}
</style>
