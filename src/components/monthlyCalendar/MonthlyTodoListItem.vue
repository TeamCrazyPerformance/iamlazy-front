<template>
  <div
    id="MonthlyTodoListItem"
    @click="showTodoModal=!showTodoModal"
  >
    {{ todo.todoContent }}
    <todo-modal
      v-if="showTodoModal"
      :todo-idx="todoIdx"
    />
  </div>
</template>

<script>
import TodoModal from '../TodoModal.vue';

export default {
  name: 'MonthlyTodoListItem',
  props: {
    todoIdx: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      showTodoModal: false,
      todo: {
        userId: 0,
        todoIdx: 1,
        todoTitle: '할일',
        todoContent: '할일',
        todoDate: '2020-04-06',
        repeatableYN: false,
        repeatUnit: 0,
        startDate: '2020-04-06',
        endDate: '2020-04-06',
        weekDay: '',
        monthDay: 0,
        finish: false,
      },
    };
  },
  components: {
    TodoModal,
  },
};
</script>

<style scoped>
#MonthlyTodoListItem {
  color:  #fff;
  background-color: #007bff;
  border: #007bff 1px solid;
  padding: 1px;
  margin-top: 3px;
  font-size: 10px;
}
</style>
