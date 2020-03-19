<template>
    <div id="dayListItem">
      <div id="day" @click="todoListShow=!todoListShow">
        <p>{{dayListItem.day}} {{dayListItem.date}}</p>
        <p>{{dayListItem.review}}</p>
      </div>
      <div id="todoList" v-show="todoListShow">
        <ul>
          <li v-for="todoListItem in todoListItems" :key="todoListItem.id">
            <TodoListItem :todoListItem="todoListItem"></TodoListItem>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'DayListItem',
  props: [
    'dayListItem',
  ],
  data() {
    return {
      todoListShow: false,
      todoListItems: [
        {
          id: 1,
          content: '낮잠자기',
          complete: false,
        },
        {
          id: 2,
          content: '낮잠자기',
          complete: false,
        },
        {
          id: 3,
          content: '낮잠자기',
          complete: false,
        },
      ],
    };
  },
  components: {
    TodoListItem,
  },
};
</script>

<style>
#dayListItem {
  width: 100%;
  height: 20%;
  text-align: left;
}
</style>
