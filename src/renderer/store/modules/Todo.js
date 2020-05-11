// import uuid from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';

const state = {
  todos: []
};

const actions = {
  ADD_TODO ({ commit }, name) {
    console.log(name);
    commit('ADD_TODO', name);
  },
  COMPLETE_TODO ({ commit }, id) {
    commit('COMPLETE_TODO', id);
  },
  CLEAR_TODOS ({ commit }) {
    commit('CLEAR_TODOS');
  }
};

const mutations = {
  ADD_TODO (state, name) {
    state.todos = [ ...state.todos, { id: uuidv4(), name } ];
  },
  COMPLETE_TODO (state, id) {
    state.todos = state.todos.filter((todo) => todo.id != id);
  },
  CLEAR_TODOS (state) {
    state.todos = [];
  }
};

export default {
  state,
  actions,
  mutations
};