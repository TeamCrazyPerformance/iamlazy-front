<template>
    <div id='weekCalendar'>
        <div id='dayList'>
            <ul>
              <li v-for='dayListItem in dayListItems' :key='dayListItem.id'>
                <DayListItem :dayListItem='dayListItem'></DayListItem>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
import DayListItem from './DayListItem.vue';

export default {
  name: 'WeekCalendar',
  data() {
    return {
      dayListItems: [
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
    DayListItem,
  },
};

</script>
