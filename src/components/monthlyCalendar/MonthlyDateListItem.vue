<template>
  <div id="monthlyDateListItem">
    <hr>
    <div v-show="active">
      <span id="date"> {{ date }} </span>
      <span
        id="emoticon"
        @click.stop="showReviewModal = !showReviewModal"
      >
        {{ review.emoticon }}
      </span>
      <review-modal
        v-if="showReviewModal"
        :reivew-date="review.reivewDate"
      />
      <div id="todoList">
        <MonthlyTodoListItem
          v-for="(todo, idx) in todos"
          :key="idx"
          :todo-idx="todo.todoIdx"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewModal from '../ReviewModal.vue';
import MonthlyTodoListItem from './MonthlyTodoListItem.vue';

export default {
  name: 'MonthlyDateListItem',
  props: {
    dateListItemDate: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
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
  components: {
    MonthlyTodoListItem,
    ReviewModal,
  },
  computed: {
    date() {
      return this.dateListItemDate.getDate();
    },
    active() {
      const today = new Date();
      return today.getMonth() === this.dateListItemDate.getMonth();
    },
  },
};
</script>

<style scoped>
#monthlyDateListItem {
  height: 100%;
  padding: 5px;
  text-align: left;
}
#date {
  display: inline-block;
  width: 50%;
  text-align: left;
}
#emoticon {
  display: inline-block;
  width: 50%;
  text-align: right;
}
hr {
  margin-top: 0px;
  margin-bottom: 8px;
  border-top: 1px solid lightgray;
}
</style>
