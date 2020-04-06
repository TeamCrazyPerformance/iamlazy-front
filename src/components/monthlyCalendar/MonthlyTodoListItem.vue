<template>
  <div
    id="MonthlyTodoListItem"
    @click="todoModalShow = !todoModalShow"
  >
    {{ todoFormListItem.todoContent }}
    <todo-modal
      v-if="todoModalShow"
    />
  </div>
</template>

<script>
import todoModal from '../TodoModal.vue';

export default {
  name: 'MonthlyTodoListItem',
  props: {
    todoFormListItem: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      todoModalShow: false,
    };
  },
  components: {
    todoModal,
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
