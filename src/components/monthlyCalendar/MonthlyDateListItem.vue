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
        :review-date="review.reviewDate"
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
    dateString() {
      return this.dateListItemDate.toISOString().split('T')[0];
    },
    review() {
      return this.$store.getters.reviewByDate(this.dateString);
    },
    todos() {
      return this.$store.getters.todosByDate(this.dateString);
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
