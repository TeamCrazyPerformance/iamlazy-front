<template>
  <div
    id="MonthlyTodoListItem"
    @click="moveToTodo()"
  >
    {{ form.todoContent }}
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
      form: {
        todoContent: '할일',
        finish: false,
      },
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
  color:  #fff;
  background-color: #007bff;
  border: #007bff 1px solid;
  padding: 1px;
  margin-top: 3px;
  font-size: 10px;
}
</style>
