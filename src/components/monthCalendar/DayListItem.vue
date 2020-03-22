<template>
  <div id="dayListItem">
    <span>{{ dayListItemId.getDate() }}</span>
    <span>{{ review }}</span>
    <TodoListItem
      v-for="todoListItemId in todoListItemsId"
      :key="todoListItemId"
      :todo-list-item-id="todoListItemId"
    />
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
      todoListShow: false,
      todoListItemsId: [1, 2],
    };
  },
  components: {
    TodoListItem,
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
