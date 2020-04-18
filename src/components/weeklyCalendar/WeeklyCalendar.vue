<template>
  <div id="weeklyCalendar">
    <div id="dateList">
      <WeeklyDateListItem
        v-for="(date,idx) in datesInWeek"
        :key="idx"
        :date-list-item-date="date"
      />
    </div>
    <div
      id="newTodoButton"
      @click="showNewTodoModal = true"
    >
      새로운 할일 만들기
    </div>
    <new-todo-modal
      v-if="showNewTodoModal"
      @close="showNewTodoModal = false"
    />
  </div>
</template>

<script>
import WeeklyDateListItem from './WeeklyDateListItem.vue';
import NewTodoModal from '../NewTodoModal.vue';

export default {
  name: 'WeekCalendar',
  data() {
    return {
      showNewTodoModal: false,
    };
  },
  computed: {
    datesInWeek() {
      const today = new Date();
      const firstDateInWeek = new Date(
        today.getFullYear(), today.getMonth(), today.getDate() - today.getDay(),
      );
      return [...Array(7).keys()].map((x) => new Date(firstDateInWeek.getFullYear(),
        firstDateInWeek.getMonth(), firstDateInWeek.getDate() + x));
    },
  },
  components: {
    WeeklyDateListItem,
    NewTodoModal,
  },
};
</script>

<style scoped>
#weeklyCalendar {
  margin: 5px;
  padding: 10px;
}

#newTodoButton {
  margin-top: 5px;
  border: gray 1px solid;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}
</style>
