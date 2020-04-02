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
      {{ reviewForm.reviewEmoticon }}
    </span>
    <review-modal
      v-if="reviewModalShow"
      :review-form="reviewFrom"
    />
    <div
      id="todoList"
      v-show="active"
    >
      <MonthlyTodoListItem
        v-for="(todoFormListItem, idx) in todoFormList"
        :key="idx"
        :todo-list-item-id="todoFormListItem"
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
      reviewForm: {},
      todoFormList: [],
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
