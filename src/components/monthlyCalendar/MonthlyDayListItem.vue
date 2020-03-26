<template>
  <div id="monthlyDayListItem">
    <span>{{ date }}</span>
    <span v-if="active">{{ review }}</span>
    <div
      id="todoList"
      v-if="active"
    >
      <MonthlyTodoListItem
        v-for="todoListItemId in todoListItemIds"
        :key="todoListItemId"
        :todo-list-item-id="todoListItemId"
      />
    </div>
  </div>
</template>

<script>
import MonthlyTodoListItem from './MonthlyTodoListItem.vue';

export default {
  name: 'MonthlyDayListItem',
  props: {
    dayListItemId: Date,
  },
  data() {
    return {
      review: ' :)',
      todoListItemIds: [1, 2],
    };
  },
  components: {
    MonthlyTodoListItem,
  },
  computed: {
    today() {
      return new Date();
    },
    date() {
      return this.dayListItemId.getDate();
    },
    active() {
      return this.today.getMonth() === this.dayListItemId.getMonth();
    },
  },
};
</script>

<style scoped>
#monthlyDayListItem {
  margin-top: 5px;
  height: 100%;
  background-color: whitesmoke;
}
</style>
