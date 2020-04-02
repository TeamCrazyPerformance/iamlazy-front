<template>
  <div
    id="weeklyTodoListItem"
  >
    <b-form-checkbox
      v-model="todoFormListItem.finish"
    >
      <span
        id="todoContent"
        @click="moveToTodo"
      >
        {{ todoFormListItem.todoContent }}
      </span>
    </b-form-checkbox>
  </div>
</template>

<script>
export default {
  name: 'WeeklyTodoListItem',
  props: {
    todoFormListItem: {
      type: Object,
      default: null,
    },
  },
  methods: {
    moveToTodo() {
      this.$router.push(`/todos/${this.todoFormListItem.todoIdx}`);
    },
  },
};
</script>

<style scoped>
#weeklyTodoListItem {
  margin: 5px;
}
</style>
