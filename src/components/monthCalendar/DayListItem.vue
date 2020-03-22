<template>
  <div id="dayListItem">
    <span>{{ date }}</span>
    <span v-if="active">{{ review }}</span>
    <div
      id="todoList"
      v-if="active"
    >
      <TodoListItem
        v-for="todoListItemId in todoListItemsId"
        :key="todoListItemId"
        :todo-list-item-id="todoListItemId"
      />
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'DayListItem',
  props: {
    dayListItemId: Date,
  },
  data() {
    return {
      review: ' :)',
      todoListItemsId: [1, 2],
    };
  },
  components: {
    TodoListItem,
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
#dayListItem {
  margin-top: 5px;
  height: 100%;
  background-color: whitesmoke;
}
</style>
