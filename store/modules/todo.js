import Vue from 'vue'

export const CREATE_ITEM = 'CREATE_ITEM';

const state = {};

const mutations = {
  [CREATE_ITEM](state, data) {
    const id = new Date().getTime();
    const item = {
      id,
      complete: false,
      data: data,
    };
    Vue.set(state, [id], item);
  },
};
const actions = {
  [CREATE_ITEM]({ commit }, payload) {
    commit(CREATE_ITEM, payload);
  },
};
const getters = {
};

export const todo = {
  state,
  getters,
  actions,
  mutations,
};