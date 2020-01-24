import Vue from 'vue';
import Vuex from 'vuex';
import { actionTypes, mutationTypes, getterTypes } from './types';
import { getBBContent }  from '../services/httpService';
import { filterBBContent } from '../services/bulletinBoardService';
import { decryptBBContent } from '../services/cryptoService';


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
    [mutationTypes.SET_BULLETIN_BOARD](state, { bbContent }) {
      state.bulletinBoardContent = bbContent;
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
      let bbContent = "Please scan QR Code";
      if (this.state.kRand === undefined) {
        commit(mutationTypes.SET_BULLETIN_BOARD, { bbContent });
      }
      bbContent = "No content published on BB";

      const response = await getBBContent();
      const filteredBBContent = filterBBContent(response);
      if (filteredBBContent.publicKey !== null) {
        bbContent = "Public key has been published on BB";
      }
      if (filteredBBContent.randomness !== null && filteredBBContent.choices !== null) {
        let decryptedBBContent = decryptBBContent(filteredBBContent);
        decryptedBBContent = decryptedBBContent.decryptedChoices.map((e) => e !== BigInt(1))
                                                                .map((e) => `Option was ${e ? "" : " not "}chosen`);
        bbContent = decryptedBBContent.toString();
      }
      commit(mutationTypes.SET_BULLETIN_BOARD, { bbContent });
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
    },
    [getterTypes.GET_SESSION_ID]: state => {
      return state.sessionId;
    }
  }

})