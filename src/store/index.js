import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    reviews: [
      {
        userId: 0,
        reviewDate: '2020-04-06',
        reviewContent: '회고',
        emoticon: 2,
      },
    ],
    todos: [
      {
        userId: 0,
        todoIdx: 1,
        todoTitle: '할일',
        todoContent: '할일',
        todoDate: '2020-04-06',
        repeatUnit: 0,
        startDate: '2020-04-06',
        endDate: '2020-04-06',
        weekDay: '',
        monthDay: 0,
        finish: false,
      },
      {
        userId: 0,
        todoIdx: 2,
        todoTitle: '할일',
        todoContent: '할일',
        todoDate: '2020-04-06',
        repeatUnit: 0,
        startDate: '2020-04-06',
        endDate: '2020-04-06',
        weekDay: '',
        monthDay: 0,
        finish: false,
      },
    ],
  },
  getters: {
    reviewByDate: (state) => (date) => state.reviews.find((review) => review.reviewDate === date)
    || {
      userId: null,
      reviewDate: null,
      reviewContent: null,
      emoticon: null,
    },
    todosByDate: (state) => (date) => state.todos.filter((todo) => todo.todoDate === date),
    todoByIdx: (state) => (idx) => state.todos.find((todo) => todo.todoIdx === idx)
    || {
      userId: null,
      todoIdx: null,
      todoTitle: null,
      todoContent: null,
      todoDate: null,
      repeatUnit: null,
      startDate: null,
      endDate: null,
      weekDay: null,
      monthDay: null,
      finish: null,
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    registerToken({ commit }, token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      commit('setToken', token);
    },
  },
  modules: {
  },
});
