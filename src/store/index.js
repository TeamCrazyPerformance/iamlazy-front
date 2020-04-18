import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const apiUrl = 'http://121.130.167.189:8092';

export default new Vuex.Store({
  state: {
    token: null,
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
    setTodos(state, todos) {
      state.todos.push(...todos);
    },
    deleteTodoByIdx(state, todoIdx) {
      state.todos.splice(state.todos.findIndex((todo) => todo.todoIdx === todoIdx, 1));
    },
  },
  actions: {
    registerToken({ commit }, token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      commit('setToken', token);
    },
    fetchTodosByDate({ commit }, date) {
      axios.get(`${apiUrl}/todos?date=${date.toISOString().split('T')[0]}`)
        .then((res) => {
          commit('setTodos', res.data);
        });
    },
    deleteTodoByIdx({ commit }, todoIdx) {
      axios.delete(`${apiUrl}/todos/${todoIdx}`)
        .then(() => {
          commit('deleteTodoByIdx', todoIdx);
        });
    },
  },
  modules: {
  },
});
