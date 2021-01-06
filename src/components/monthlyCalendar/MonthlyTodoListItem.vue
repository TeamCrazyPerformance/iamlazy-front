<template>
  <div
    id="MonthlyTodoListItem"
    @click="showTodoModal = true"
  >
    {{ todo.todoTitle }}
    <todo-modal
      v-if="showTodoModal"
      :todo-idx="todo.todoIdx"
      @close="showTodoModal = false"
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
    };
  },
  components: {
    TodoModal,
  },
  computed: {
    todo() {
      return this.$store.getters.todoByIdx(this.todoIdx);
    },
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
