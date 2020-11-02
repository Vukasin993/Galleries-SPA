import Vuex from "vuex";
import Vue from 'vue'
import {mutations} from './mutations'
import {actions} from './actions'
import auth from './auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        galleries: [],
    },

    getters: {
        galleries: ({galleries}) => galleries,
    },

    mutations,
    actions,

    modules: {
        auth
    }
})