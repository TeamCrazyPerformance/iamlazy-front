<template>
  <div id="weeklyDateListItem">
    <div
      @click="showTodoList = !showTodoList"
    >
      <h4>{{ date }}</h4>
      <span
        id="review"
        @click.stop="showReviewModal = !showReviewModal"
      >
        {{ review.reviewContent }}
        {{ review.emoticon }}
      </span>
      <review-modal
        v-if="showReviewModal"
        :review-date="review.reviewDate"
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
      default: new Date(),
    },
  },
  data() {
    return {
      showTodoList: false,
      showReviewModal: false,
      review: {
        userId: 0,
        reviewDate: '2020-04-06',
        reviewContent: '회고',
        emoticon: 2,
      },
      todos: [
        {
          userId: 0,
          todoIdx: 1,
          todoTitle: '할일',
          todoContent: '할일',
          todoDate: '2020-04-06',
          repeatableYN: false,
          repeatUnit: 0,
          startDate: '2020-04-06',
          endDate: '2020-04-06',
          weekDay: '',
          monthDay: 0,
          finish: false,
        },
        {
          userId: 0,
          todoIdx: 2,
          todoTitle: '할일',
          todoContent: '할일',
          todoDate: '2020-04-06',
          repeatableYN: false,
          repeatUnit: 0,
          startDate: '2020-04-06',
          endDate: '2020-04-06',
          weekDay: '',
          monthDay: 0,
          finish: false,
        },
      ],
    };
  },
  computed: {
    date() {
      return this.dateListItemDate.toISOString().split('T')[0];
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
