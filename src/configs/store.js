import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: sessionStorage.getItem('count') ? sessionStorage.getItem('count') : 0,
        author: 'gui'
    },
    mutations: {
        editcount(state, data) {
            state.count = data;
        }
    },
    getters: {

    }
})

export default store