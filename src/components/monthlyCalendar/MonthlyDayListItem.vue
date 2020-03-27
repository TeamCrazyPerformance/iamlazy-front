<template>
  <div id="monthlyDayListItem">
    <span
      id="date"
    >{{ date }}</span>
    <span
      id="review"
      v-show="active"
      @click="showReviewModal"
    >
      {{ reviewEmoticon }}
    </span>
    <review-modal
      v-if="reviewModalShow"
      :date="dayListItemId"
    />
    <div
      id="todoList"
      v-show="active"
    >
      <MonthlyTodoListItem
        v-for="(todoListItemId, idx) in todoListItemIds"
        :key="idx"
        :todo-list-item-id="todoListItemId"
      />
    </div>
  </div>
</template>

<script>
import ReviewModal from '../ReviewModal.vue';
import MonthlyTodoListItem from './MonthlyTodoListItem.vue';

export default {
  name: 'MonthlyDayListItem',
  props: {
    dayListItemId: {
      type: Date,
      default: new Date(),
    },
  },
  data() {
    return {
      reviewEmoticon: ' :)',
      todoListItemIds: [1, 2],
      reviewModalShow: false,
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
      return this.dayListItemId.getDate();
    },
    active() {
      return this.today.getMonth() === this.dayListItemId.getMonth();
    },
  },
  methods: {
    showReviewModal() {
      this.reviewModalShow = !this.reviewModalShow;
    },
  },
};
</script>

<style scoped>
#monthlyDayListItem {
  margin-top: 5px;
  height: 100%;
  background-color: whitesmoke;
}
</style>
