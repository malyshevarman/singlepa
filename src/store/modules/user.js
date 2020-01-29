import Axios from 'axios';

const state = {
    users: null,
};

const getters = {
    USERS: state => {
        return state.users;
    },
};
const mutations = {
    SET_USERS: (state, payload) => {
        state.users = payload;
    },
};
const actions = {
    GET_USERS: async (context) => {
        let {data} = await Axios.get('https://jsonplaceholder.typicode.com/users');
        context.commit('SET_USERS', data);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};