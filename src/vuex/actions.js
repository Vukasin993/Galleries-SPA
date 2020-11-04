
import {galleries} from '../services/Galleries'
import {authors} from '../services/Author'

export const actions= {
    async fetchGalleries(state) {
        const data = await galleries.getAll();
        state.commit('setGalleries', data);
    },

    getOne(state) {
        const data = galleries.getOne();
        state.commit('getGallery', data)
    },

    async fetchImages(state) {
        const data = await this.fetchImages.getAll();
        state.commit('setImages', data)
    },

    getOneAuthor(state) {
        const data = authors.getOne();
        state.commit('getAuthor', data)
    },

    addGallery(state) {
        const data = galleries.add();
        state.commit('addGallery', data);
        
    },

    //  deleteMovie(state, id) {
    //     movies.deleteMovie(id);
    //     state.commit('deleteMovie', id)
    // },




}