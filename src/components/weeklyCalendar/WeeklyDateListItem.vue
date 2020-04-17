<template>
  <div id="weeklyDateListItem">
    <div
      @click="showTodoList = !showTodoList"
    >
      <h4>{{ formatedDate }}</h4>
      <span
        id="review"
        @click.stop="showReviewModal = !showReviewModal"
      >
        {{ review.reviewContent }}
        {{ review.emoticon }}
      </span>
      <review-modal
        v-if="showReviewModal"
        :review-date="dateListItemDate"
      />
    </div>
    <div
      id="todoList"
      v-if="showTodoList"
    >
      <hr>
      <WeeklyTodoListItem
        v-for="(todo,idx) in todos"
        :key="idx"
        :todo-idx="todo.todoIdx"
      />
    </div>
  </div>
</template>

<script>
import WeeklyTodoListItem from './WeeklyTodoListItem.vue';
import ReviewModal from '../ReviewModal.vue';

export default {
  name: 'WeeklyDateListItem',
  components: {
    WeeklyTodoListItem,
    ReviewModal,
  },
  props: {
    dateListItemDate: {
      type: Date,
      default: null,
    },
  },
  data() {
    return {
      showTodoList: false,
      showReviewModal: false,
    };
  },
  computed: {
    formatedDate() {
      return this.dateListItemDate.toISOString().split('T')[0];
    },
    review() {
      return this.$store.getters.reviewByDate(this.dateListItemDate);
    },
    todos() {
      return this.$store.getters.todosByDate(this.dateListItemDate);
    },
  },
};
</script>

<style scoped>
#weeklyDateListItem {
  margin-top: 5px;
  border: gray 1px solid;
  border-radius: 10px;
  padding: 15px;
}
</style>
