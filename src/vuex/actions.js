
import {galleries} from '../services/Galleries'

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
    }
    //  deleteMovie(state, id) {
    //     movies.deleteMovie(id);
    //     state.commit('deleteMovie', id)
    // },

    // addMovie(state) {
    //     const data = movies.addMovie();
    //     state.commit('addMovie', data);
        
    // },


}