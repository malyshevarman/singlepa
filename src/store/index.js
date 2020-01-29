import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        layout: 'sitelayout'
    },
    getters: {
        layout(state) {
            return state.layout
        }
    },
    mutations: {
        setLayout(state, payload) {
            state.layout = payload
        }
    },
    actions: {},
    modules:{
        user
    }
});