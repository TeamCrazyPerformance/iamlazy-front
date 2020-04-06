<template>
  <div id="weeklyDayListItem">
    <div
      id="day"
      @click="showTodoList = !showTodoList"
    >
      <h4>{{ formatedDate }}</h4>
      <span
        id="review"
        @click.stop="showReviewModal = !showReviewModal"
      >
        {{ reviewForm.reviewContent }}
        {{ reviewForm.emoticon }}
      </span>
      <review-modal
        v-if="showReviewModal"
        :review-form="reviewForm"
      />
    </div>
    <div
      id="todoList"
      v-if="showTodoList"
    >
      <hr>
      <WeeklyTodoListItem
        v-for="(todoForm,idx) in todoForms"
        :key="idx"
        :todo-form="todoForm"
      />
    </div>
  </div>
</template>

<script>
import WeeklyTodoListItem from './WeeklyTodoListItem.vue';
import ReviewModal from '../ReviewModal.vue';

export default {
  name: 'WeeklyDayListItem',
  components: {
    WeeklyTodoListItem,
    ReviewModal,
  },
  props: {
    dayListItemDay: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      reviewForm: {
        reviewContent: '회고',
        emoticon: ':)',
      },
      todoForms: [
        {
          todoTitle: '할일',
          todoContent: '할일',
          todoDate: this.dayListItemDay,
          repeatableYN: true,
          repeatUnit: '반복없음',
          startDate: this.dayListItemDay,
          endDate: this.dayListItemDay,
          finish: false,
        },
        {
          todoTitle: '할일',
          todoContent: '할일',
          todoDate: this.dayListItemDay,
          repeatableYN: true,
          repeatUnit: '반복없음',
          startDate: this.dayListItemDay,
          endDate: this.dayListItemDay,
          finish: false,
        },
      ],
      showTodoList: false,
      showReviewModal: false,
    };
  },
  computed: {
    formatedDate() {
      const date = this.dayListItemDay.toISOString().split('T')[0].split('-');
      return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
    },
  },
};
</script>

<style scoped>
#weeklyDayListItem {
  margin-top: 5px;
  border: gray 1px solid;
  border-radius: 10px;
  padding: 15px;
}
</style>
