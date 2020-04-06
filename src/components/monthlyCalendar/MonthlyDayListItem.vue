<template>
  <div id="monthlyDayListItem">
    <hr>
    <div v-show="active">
      <span id="date"> {{ date }} </span>
      <span
        id="emoticon"
        @click.stop="showReviewModal = !showReviewModal"
      >
        {{ reviewForm.emoticon }}
      </span>
      <review-modal
        v-if="showReviewModal"
        :review-form="reviewForm"
      />
      <div id="todoList">
        <MonthlyTodoListItem
          v-for="(todoForm, idx) in todoForms"
          :key="idx"
          :todo-form="todoForm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ReviewModal from '../ReviewModal.vue';
import MonthlyTodoListItem from './MonthlyTodoListItem.vue';

export default {
  name: 'MonthlyDayListItem',
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
      showReviewModal: false,
    };
  },
  components: {
    MonthlyTodoListItem,
    ReviewModal,
  },
  computed: {
    today() {
      return new Date();
    },
    date() {
      return this.dayListItemDay.getDate();
    },
    active() {
      return this.today.getMonth() === this.dayListItemDay.getMonth();
    },
  },
};
</script>

<style scoped>
#monthlyDayListItem {
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
