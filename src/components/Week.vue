<template>
    <div id='week'>
        <div id='weekList'>
            <ul>
              <li v-for='weekListItem in weekListItems' :key='weekListItem.id'>
                <WeekListItem :weekListItem='weekListItem'></weekListItem>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import WeekListItem from './WeekListItem.vue';

export default {
  name: 'Week',
  data() {
    return {
      weekListItems: [
        {
          id: 1,
          day: '월',
          date: '2020-03-16',
          review: '회고를 작성해주세요.',
        },
        {
          id: 2,
          day: '화',
          date: '2020-03-17',
          review: '회고를 작성해주세요.',

        },
        {
          id: 3,
          day: '수',
          date: '2020-03-18',
          review: '회고를 작성해주세요.',

        },
        {
          id: 4,
          day: '목',
          date: '2020-03-19',
          review: '회고를 작성해주세요.',

        },
        {
          id: 5,
          day: '금',
          date: '2020-03-20',
          review: '회고를 작성해주세요.',

        },
        {
          id: 6,
          day: '토',
          date: '2020-03-21',
          review: '회고를 작성해주세요.',

        },
        {
          id: 7,
          day: '일',
          date: '2020-03-22',
          review: '회고를 작성해주세요.',

        },
      ],
    };
  },
  components: {
    WeekListItem,
  },
};

</script>
