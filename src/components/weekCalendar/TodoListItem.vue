<template>
  <div id="todoListItem">
    <input
      type="checkbox"
      v-model="finish"
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
      finish: false,
    };
  },
};
</script>

<style scoped>
#todoListItem {
  background-color: whitesmoke;
}
</style>
