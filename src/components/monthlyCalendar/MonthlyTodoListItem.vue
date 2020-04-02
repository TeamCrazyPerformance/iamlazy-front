<template>
  <div
    id="MonthlyTodoListItem"
    @click="moveToTodo"
  >
    {{ todoFormListItem.todoContent }}
  </div>
</template>

<script>
export default {
  name: 'MonthlyTodoListItem',
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
#MonthlyTodoListItem {
  color:  #fff;
  background-color: #007bff;
  border: #007bff 1px solid;
  padding: 1px;
  margin-top: 3px;
  font-size: 10px;
}
</style>
