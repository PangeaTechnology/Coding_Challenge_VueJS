import Vue from 'vue'

export const CREATE_ITEM = 'CREATE_ITEM';
export const READ_ITEMS = 'READ_ITEMS';

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
  [READ_ITEMS]: state => state,
};

export const todo = {
  state,
  getters,
  actions,
  mutations,
};