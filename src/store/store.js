import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qrCode: "",
        bulletinBoardContent: [],
        bulletinBoardURL: "https://reqres.in/api/users/2"
    },
    mutations: {
        'SET QR CODE'(state, { qrCode }) {
            state.qrCode = qrCode;
        },
        'SET BB'(state, { bulletinBoardContent }) {
            state.bulletinBoardContent = bulletinBoardContent;
        }
    },
    actions: {
        setQrCode({ commit }, qrCode) {
            commit('SET QR CODE', qrCode);
        },
        setBulletinBoardContent({ commit }, bulletinBoardContent) {
            console.log('ACTION')
            commit('SET BB', bulletinBoardContent);
        }
    },
    getters: {
        qrCode: state => {
            return state.qrCode;
        },
        bulletinBoardContent: state => {
            return state.bulletinBoardContent;
        },
        bulletinBoardURL: state => {
            return state.bulletinBoardURL;
        }
    }
});