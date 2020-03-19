<template>
    <div id="TodoListItem">
        <span>{{todoListItem.content}}</span>
        <input type="checkbox" v-model="todoListItem.complete"/>
    </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: [
    'todoListItem',
  ],
};
</script>
