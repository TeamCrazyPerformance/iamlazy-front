<template>
  <div id="todoListItem">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
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
#todoListItem {
  background-color: lightgray;
  margin-top: 3px;
}
</style>
