import Vuex from "vuex";
import Vue from 'vue'
import {mutations} from './mutations'
import {actions} from './actions'
import auth from './auth'
import comment from './comment'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        galleries: [],
        images: [],
        authors: [],
        comments: [],
    },

    getters: {
        galleries: ({galleries}) => galleries,
        images: ({images}) => images,
        authors: ({authors}) => authors,
        comments: ({comments}) => comments,
        
    },

    mutations,
    actions,

    modules: {
        auth,
        comment
    }
})