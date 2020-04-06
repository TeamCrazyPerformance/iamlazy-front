<template>
  <div
    id="MonthlyTodoListItem"
    @click="showTodoModal=!showTodoModal"
  >
    {{ todoForm.todoContent }}
    <todo-modal
      v-if="showTodoModal"
      @close="showTodoModal=!showTodoModal"
      :todo-form="todoForm"
    />
  </div>
</template>

<script>
import TodoModal from '../TodoModal.vue';

export default {
  name: 'MonthlyTodoListItem',
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
#MonthlyTodoListItem {
  color:  #fff;
  background-color: #007bff;
  border: #007bff 1px solid;
  padding: 1px;
  margin-top: 3px;
  font-size: 10px;
}
</style>
