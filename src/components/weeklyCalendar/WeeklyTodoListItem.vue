<template>
  <div
    id="weeklyTodoListItem"
  >
    <b-form-checkbox
      v-model="form.finish"
    >
      <span
        id="todoContent"
        @click="moveToTodo"
      >
        {{ form.todoContent }}
      </span>
    </b-form-checkbox>
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
  created() {
    this.$http.get('http://121.130.167.189:8080/todos?authenticated=false&credentials=%7B%7D&date=today&details=%7B%7D')
      .then(() => { alert('success'); });
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
#weeklyTodoListItem {
  margin: 5px;
}
</style>
