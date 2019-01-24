import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        alldata: sessionStorage.getItem('alldata') ? sessionStorage.getItem('alldata') : "",
        author: 'gui',
        loadingStatus: false,
        loadStatus:false
    },
    mutations: {
        editcount(state, data) {
            state.count = data;
        },
        editLoding(state, bool) {
            state.loadingStatus = bool
        },
        editLoad(state, bool) {
            state.loadStatus = bool
        }
    },
    getters: {
        getLoding(state) {
            return state.loadingStatus
        },
        getLoad(state) {
            return state.loadStatus
        }
    }
})

export default store