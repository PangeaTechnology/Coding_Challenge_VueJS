import Vue from 'vue'

export const CREATE_ITEM = 'CREATE_ITEM';
export const READ_ITEMS = 'READ_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const COMPLETE_ITEM = 'COMPLETE_ITEM';

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
  [UPDATE_ITEM](state, payload) {
    const { id, data} = payload;
    if (typeof data === 'object') {
      state[id] = {
        ...state[id],
        data: {
          ...state[id].data,
          ...data,
        },
      }
    } else {
      state[id] = {
        ...state[id],
        data,
      } 
    }
  },
  [DELETE_ITEM](state, id) {
    Vue.delete(state, id);
  },
  [COMPLETE_ITEM](state, id) {
    state[id].complete = true;
  }
};
const actions = {
  [CREATE_ITEM]({ commit }, payload) {
    commit(CREATE_ITEM, payload);
  },
  [UPDATE_ITEM]({ commit }, payload) {
    commit(UPDATE_ITEM, payload);
  },
  [DELETE_ITEM]({ commit }, payload) {
    commit(DELETE_ITEM, payload);
  },
  [COMPLETE_ITEM]({ commit }, payload) {
    commit(COMPLETE_ITEM, payload);
  }
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