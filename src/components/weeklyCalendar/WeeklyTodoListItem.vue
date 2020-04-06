<template>
  <div
    id="weeklyTodoListItem"
  >
    <b-form-checkbox
      v-model="todoForm.finish"
    />
    <span
      id="todoContent"
      @click.stop="showTodoModal=!showTodoModal"
    >
      {{ todoForm.todoContent }}
    </span>
    <todo-modal
      v-if="showTodoModal"
      :todo-form="todoForm"
    />
  </div>
</template>

<script>
import TodoModal from '../TodoModal.vue';

export default {
  name: 'WeeklyTodoListItem',
  props: {
    todoForm: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showTodoModal: false,
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
