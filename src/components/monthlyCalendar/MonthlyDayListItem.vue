<template>
  <div id="monthlyDayListItem">
    <hr>
    <span
      id="date"
    >
      {{ date }}
    </span>
    <span
      id="emoticon"
      v-show="active"
      @click="showReviewModal"
    >
      {{ form.reviewEmoticon }}
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
        v-for="(todoListItemId, idx) in form.todoListItemIds"
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
      form: {
        reviewEmoticon: ' :)',
        todoListItemIds: [1, 2],
      },
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
