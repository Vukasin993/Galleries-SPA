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
        gallery: null,
        images: [],
        authors: [],
        comments: [],
        myGalleries: [],
        numberPerPage: Number
        // searchText: ''
        
    },

    getters: {
        galleries: ({galleries}) => galleries,
        gallery: ({gallery}) => {console.log('gallery getter', { gallery }); return gallery},
        images: ({images}) => images,
        authors: ({authors}) => authors,
        comments: ({comments}) => comments,
        myGalleries: ({myGalleries})=>myGalleries,
        numberPerPage: ({numberPerPage}) => numberPerPage,
        // filteredGalleries: state =>state.galleries.filter(gallery =>gallery.name.toLowerCase().indexOf(state.searchText.toLowerCase()) > -1)
    },

    mutations,
    actions,

    modules: {
        auth,
        comment
    }
})