<template>
  <div id="todoListItem">
    <input
      type="checkbox"
      v-model="complete"
    >
    <span>{{ content }}</span>
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
      complete: false,
    };
  },
};
</script>

<style scoped>
#todoListItem {
  background-color: whitesmoke;
}
</style>
