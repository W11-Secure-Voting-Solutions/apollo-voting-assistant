import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qrCode: "",
        bulletinBoard: []
    },
    mutations: {
        'SET QR CODE' (state, {qrCode}) {
            state.qrCode = qrCode;
        },
        'SET BB' (state, {bulletinBoard}) {
            state.bulletinBoard = bulletinBoard
        }
    },
    actions: {
        setQrCode ({commit}, qrCode) {
            commit('SET QR CODE', qrCode)
        },
        setBB ({commit}, bulletinBoard) {
            commit('SET BB', bulletinBoard)
        }
    },
    getters: {
        qrCode: state => {
            return state.qrCode;
        },
        bulletinBoard: state => {
            return state.bulletinBoard;
        }
    }
});