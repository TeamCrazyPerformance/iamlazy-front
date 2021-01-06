<template>
  <div
    id="weeklyTodoListItem"
  >
    <b-form-checkbox
      v-model="todo.finish"
    >
      <span
        id="todoContent"
        @click.stop="showTodoModal = true"
      >
        {{ todo.todoTitle }}
      </span>
    </b-form-checkbox>
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
#weeklyTodoListItem {
  margin: 5px;
}
</style>
