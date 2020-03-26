<template>
  <div id="weeklyDayListItem">
    <div
      id="day"
      @click="todoListShow=!todoListShow"
    >
      <span>{{ formatedDate }}</span>
      <br>
      <span>{{ review }}</span>
    </div>
    <div
      id="todoList"
      v-show="todoListShow"
    >
      <WeeklyTodoListItem
        v-for="todoListItemId in todoListItemIds"
        :key="todoListItemId"
        :todo-list-item-id="todoListItemId"
      />
    </div>
  </div>
</template>

<script>
import WeeklyTodoListItem from './WeeklyTodoListItem.vue';

export default {
  name: 'WeeklyDayListItem',
  props: {
    dayListItemId: Date,
  },
  data() {
    return {
      review: '회고를 입력해주세요',
      todoListItemIds: [1, 2, 3],
      todoListShow: false,
    };
  },
  computed: {
    formatedDate() {
      return this.dayListItemId.toISOString().split('T')[0];
    },
  },
  components: {
    WeeklyTodoListItem,
  },
};
</script>

<style scoped>
#weeklyDayListItem {
  background:lightgray;
  margin-top: 5px;
}
#day {
  text-align: left;
}
</style>
