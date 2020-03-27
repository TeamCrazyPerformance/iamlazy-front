<template>
  <div
    id="weeklyTodoListItem"
  >
    <input
      type="checkbox"
      v-model="finish"
    >
    <span
      id="content"
      @click="moveToTodo"
    >
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'WeeklyTodoListItem',
  props: {
    todoListItemId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      content: '할일',
      finish: false,
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
#weeklyTodoListItem {
  background-color: whitesmoke;
}
</style>
