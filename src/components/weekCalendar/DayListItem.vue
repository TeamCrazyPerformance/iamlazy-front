<template>
  <div id="dayListItem">
    <div
      id="day"
      @click="todoListShow=!todoListShow"
    >
      <span>{{ dayListItemId.getFullYear() }} - {{ dayListItemId.getMonth()+1 }} -
        {{ dayListItemId.getDate() }}</span>
      <br>
      <span>{{ review }}</span>
    </div>
    <div
      id="todoList"
      v-show="todoListShow"
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
      review: '회고를 입력해주세요',
      todoListShow: false,
      todoListItemsId: [1, 2, 3],
    };
  },
  components: {
    TodoListItem,
  },
};
</script>

<style scoped>
#dayListItem {
  background:lightgray;
  margin-top: 5px;
}
#day {
  text-align: left;
}
</style>
