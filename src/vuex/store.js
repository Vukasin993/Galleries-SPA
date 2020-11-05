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
        searchText: ''
    },

    getters: {
        galleries: ({galleries}) => galleries,
        images: ({images}) => images,
        authors: ({authors}) => authors,
        comments: ({comments}) => comments,
        filteredGalleries: state =>state.galleries.filter(gallery =>gallery.name.toLowerCase().indexOf(state.searchText.toLowerCase()) > -1)
    },

    mutations,
    actions,

    modules: {
        auth,
        comment
    }
})