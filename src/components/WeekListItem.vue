<template>
    <div id="weekListItem" v-on:click="todoListShow=!todoListShow">
      <div id="date">
        <p>{{weekListItem.day}} {{weekListItem.date}}</p>
        <p>{{weekListItem.review}}</p>
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
  name: 'WeekListItem',
  props: [
    'weekListItem',
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
#weekListItem {
  width: 100%;
  height: 20%;
  text-align: left;
}
</style>
