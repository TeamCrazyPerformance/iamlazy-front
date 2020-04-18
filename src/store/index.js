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
    fetchTodos(state, todos) {
      state.todos.push(...todos);
    },
    deleteTodo(state, todoIdx) {
      state.todos.splice(state.todos.findIndex((todo) => todo.todoIdx === todoIdx), 1);
    },
    updateTodo(state, newTodo) {
      state.todos[state.todos.findIndex((todo) => todo.todoIdx === newTodo.todoIdx)] = newTodo;
    },
  },
  actions: {
    setToken({ commit }, token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      commit('setToken', token);
    },
    fetchTodos({ commit }, date) {
      axios.get(`${apiUrl}/todos?date=${date.toISOString().split('T')[0]}`)
        .then((res) => {
          commit('fetchTodos', res.data);
        });
    },
    deleteTodo({ commit }, todoIdx) {
      axios.delete(`${apiUrl}/todos/${todoIdx}`)
        .then(() => {
          commit('deleteTodo', todoIdx);
        });
    },
    updateTodo({ commit }, todo) {
      axios.put(`${apiUrl}/todos/${todo.todoIdx}`, todo)
        .then(() => {
          commit('updateTodo', todo);
        });
    },
  },
  modules: {
  },
});
