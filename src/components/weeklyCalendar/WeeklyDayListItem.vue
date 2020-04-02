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
        {{ reviewForm.reviewContent }}
        {{ reviewForm.emoticon }}
      </span>
      <review-modal
        v-if="reviewModalShow"
        :review-form="reviewFrom"
      />
    </div>
    <div
      id="todoList"
      v-if="todoListShow"
    >
      <hr>
      <WeeklyTodoListItem
        v-for="(todoFormListItem,idx) in todoFormList"
        :key="idx"
        :todo-form-list-item="todoFormListItem"
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
      reviewForm: {},
      todoFormList: [],
      todoListShow: false,
      reviewModalShow: false,
    };
  },
  created() {
    this.$http.get(`http://121.130.167.189:8092/todos?date=${this.dayListItemId.toISOString()}`, {
      headers: {
        Authorization: `Bearer ${this.$route.query.token}`,
      },
    })
      .then((res) => {
        res.data.forEach((element) => {
          this.todoFormList.push(element);
        });
      })
      .catch();
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
