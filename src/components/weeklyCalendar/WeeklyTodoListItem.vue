<template>
  <div id="weeklyTodoListItem">
    <input
      type="checkbox"
      v-model="finish"
    >
    <span>{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 'WeeklyTodoListItem',
  props: {
    todoListItemId: Number(0),
  },
  data() {
    return {
      content: '할일',
      finish: false,
    };
  },
};
</script>

<style scoped>
#weeklyTodoListItem {
  background-color: whitesmoke;
}
</style>
