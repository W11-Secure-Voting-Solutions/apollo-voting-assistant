import Vue from 'vue';
import Vuex from 'vuex';
import {actionTypes, mutationTypes, getterTypes} from './types'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qrCode: "",
        bulletinBoardContent: [],
    },
    mutations: {
        [mutationTypes.SET_QR_CODE](state, { qrCode }) {
            state.qrCode = qrCode;
        },
        [mutationTypes.SET_BULLETIN_BOARD](state, { bulletinBoardContent }) {
            state.bulletinBoardContent = bulletinBoardContent;
        }
    },
    actions: {
        [actionTypes.QR_CODE]({ commit }, qrCode) {
            commit(mutationTypes.SET_QR_CODE, { qrCode });
        },
        [actionTypes.FETCH_BULLETIN_BOARD]({ commit }, bulletinBoardContent) {
            // let response = await get("https://reqres.in/api/users/2");
            // response = response.data.data;
            let response = {
              "SID": "123456789",
              "title": "myTitle",
              "ballot": {
                "a": "1",
                "b": 2
              },
              "r": "47012740928012",
            };
            commit(mutationTypes.SET_BULLETIN_BOARD, { bulletinBoardContent });
            return response;
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
        }
    }
});