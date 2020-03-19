<template>
    <div id="weekListItem">
        <p>{{item.day}} {{item.date}}</p>
        <p>{{item.review}}</p>
    </div>
</template>

<script>
export default {
  name: 'WeekListItem',
  props: [
    'item',
  ],
};
</script>

<style>
#weekListItem {
  width: 100%;
  height: 20%;
  text-align: left;
}
</style>
