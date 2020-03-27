<template>
  <div
    id="MonthlyTodoListItem"
    @click="moveToTodo()"
  >
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'MonthlyTodoListItem',
  props: {
    todoListItemId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      content: '할일',
    };
  },
  methods: {
    moveToTodo() {
      this.$router.push(`/todos/${this.todoListItemId}`);
    },
  },
};
</script>

<style scoped>
#MonthlyTodoListItem {
  background-color: lightgray;
  margin-top: 3px;
}
</style>
