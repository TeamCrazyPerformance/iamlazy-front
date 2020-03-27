<template>
  <div id="weeklyDayListItem">
    <div
      id="day"
      @click="showTodoList"
    >
      <span>{{ formatedDate }}</span>
      <br>
      <span
        id="review"
        @click="showReviewModal"
      >
        {{ reviewContent }}
      </span>
      <review-modal
        v-if="reviewModalShow"
        :date="dayListItemId"
      />
    </div>
    <div
      id="todoList"
      v-show="todoListShow"
    >
      <WeeklyTodoListItem
        v-for="(todoListItemId,idx) in todoListItemIds"
        :key="idx"
        :todo-list-item-id="todoListItemId"
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
    dayListItemId: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      reviewContent: '회고를 입력해주세요',
      todoListItemIds: [1, 2, 3],
      todoListShow: false,
      reviewModalShow: false,
    };
  },
  computed: {
    formatedDate() {
      return this.dayListItemId.toISOString().split('T')[0];
    },
  },
  methods: {
    showTodoList() {
      this.todoListShow = !this.todoListShow;
    },
    showReviewModal(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      this.reviewModalShow = !this.reviewModalShow;
    },
  },
};
</script>

<style scoped>
#weeklyDayListItem {
  background:lightgray;
  margin-top: 5px;
}
#day {
  text-align: left;
}
</style>
