<template>
  <div id="weeklyDayListItem">
    <div
      id="day"
      @click="showTodoList"
    >
      <h4>{{ formatedDate }}</h4>
      <span
        id="review"
        @click="showReviewModal"
      >
        {{ form.reviewContent }}
      </span>
      <review-modal
        v-if="reviewModalShow"
        :date="dayListItemId"
      />
    </div>
    <div
      id="todoList"
      v-if="todoListShow"
    >
      <hr>
      <WeeklyTodoListItem
        v-for="(todoListItemId,idx) in form.todoListItemIds"
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
      form: {
        reviewContent: '회고를 입력해주세요',
        todoListItemIds: [1, 2, 3],
      },
      todoListShow: false,
      reviewModalShow: false,
    };
  },
  computed: {
    formatedDate() {
      const date = this.dayListItemId.toISOString().split('T')[0].split('-');
      return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
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
  margin-top: 5px;
  border: gray 1px solid;
  border-radius: 10px;
  padding: 15px;
}
</style>
