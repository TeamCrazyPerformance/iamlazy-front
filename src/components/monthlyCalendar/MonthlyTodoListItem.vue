<template>
  <div id="MonthlyTodoListItem">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'MonthlyTodoListItem',
  props: {
    todoListItemId: Number(0),
  },
  data() {
    return {
      content: '할일',
    };
  },
};
</script>

<style scoped>
#MonthlyTodoListItem {
  background-color: lightgray;
  margin-top: 3px;
}
</style>
