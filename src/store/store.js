import Vue from 'vue';
import Vuex from 'vuex';
import { actionTypes, mutationTypes, getterTypes } from './types';
import { get } from '../services/httpService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    qrCode: "",
    bulletinBoardContent: {},
    bulletinBoardRefreshInterval: 3000,
    sessionId: "",
    kRand: ""
  },
  mutations: {
    [mutationTypes.SET_QR_CODE](state, { qrCode }) {
      state.qrCode = qrCode;
    },
    [mutationTypes.SET_BULLETIN_BOARD](state, { bulletinBoardContent }) {
      state.bulletinBoardContent = bulletinBoardContent;
    },
    [mutationTypes.SET_SESSION_ID](state, { sessionId }) {
      state.sessionId = sessionId;
    },
    [mutationTypes.SET_K_RAND](state, { kRand }) {
      state.kRand = kRand;
    }
  },
  actions: {
    [actionTypes.SET_QR_CODE]({ commit }, qrCode) {
      commit(mutationTypes.SET_QR_CODE, { qrCode });
    },
    [actionTypes.SET_SESSION_ID]({ commit }, sessionId) {
      commit(mutationTypes.SET_SESSION_ID, { sessionId });
    },
    [actionTypes.SET_K_RAND]({ commit }, kRand) {
      commit(mutationTypes.SET_K_RAND, { kRand });
    },
    async [actionTypes.FETCH_BULLETIN_BOARD]({ commit }) {
      // const url = "https://localhost:8080/assistant/bulletinboard";
      const url = "https://gp.thenflash.com/assistant/bulletinboard";
      // const url = "https://reqres.in/api/users";
      let response = await get(url, {
        params: {
          // page: 2
          session_id: this.state.sessionId
        }
      });
      const bulletinBoardContent = response.data.data;
      commit(mutationTypes.SET_BULLETIN_BOARD, { bulletinBoardContent });
    }
  },
  getters: {
    [getterTypes.GET_QR_CODE]: state => {
      return state.qrCode;
    },
    [getterTypes.GET_BULLETIN_BOARD]: state => {
      return state.bulletinBoardContent;
    },
    [getterTypes.GET_BULLETIN_BOARD_URL]: state => {
      return state.bulletinBoardURL;
    },
    [getterTypes.GET_BULLETIN_BOARD_REFRESH_INTERVAL]: state => {
      return state.bulletinBoardRefreshInterval;
    },
    [getterTypes.GET_K_RAND]: state => {
      return state.kRand;
    }
  }
});