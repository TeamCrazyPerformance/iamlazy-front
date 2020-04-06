<template>
  <div
    id="weeklyTodoListItem"
  >
    <b-form-checkbox
      v-model="todoFormListItem.finish"
    >
      <span
        id="todoContent"
        @click="todoModalShow = !todoModalShow"
      >
        {{ todoFormListItem.todoContent }}
      </span>
    </b-form-checkbox>
    <todo-modal
      v-if="todoModalShow"
    />
  </div>
</template>

<script>
import TodoModal from '../TodoModal.vue';

export default {
  name: 'WeeklyTodoListItem',
  props: {
    todoFormListItem: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      todoModalShow: false,
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
