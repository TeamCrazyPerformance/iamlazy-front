<template>
  <div
    id="weeklyTodoListItem"
  >
    <b-form-checkbox
      v-model="todo.finish"
    >
      <span
        id="todoContent"
        @click.prevent="showTodoModal=!showTodoModal"
      >
        {{ todo.todoContent }}
      </span>
    </b-form-checkbox>
    <todo-modal
      v-if="showTodoModal"
      :todo-idx="todo.todoIdx"
    />
  </div>
</template>

<script>
import TodoModal from '../TodoModal.vue';

export default {
  name: 'WeeklyTodoListItem',
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
#weeklyTodoListItem {
  margin: 5px;
}
</style>
