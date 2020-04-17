import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: 'asd',
    reviews: [],
    todos: [],
    defaultReview: {
      userId: null,
      reviewDate: null,
      reviewContent: null,
      emoticon: null,
    },
    defaultTodo: {
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
  getters: {
    token: (state) => state.token,
    reviewByDate: (state) => (date) => state.reviews.find((review) => review.reviewDate.split('T')[0] === date.toISOString().split('T')[0])
    || state.defaultReview,
    todosByDate: (state) => (date) => state.todos.filter((todo) => todo.todoDate.split('T')[0] === date.toISOString().split('T')[0]),
    todoByIdx: (state) => (idx) => state.todos.find((todo) => todo.todoIdx === idx)
    || state.defaultTodo,
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
