
import {galleries} from '../services/Galleries'

export const actions= {
    async fetchGalleries(state) {
        const data = await galleries.getAll();
        state.commit('setGalleries', data);
    },

    //  deleteMovie(state, id) {
    //     movies.deleteMovie(id);
    //     state.commit('deleteMovie', id)
    // },

    // addMovie(state) {
    //     const data = movies.addMovie();
    //     state.commit('addMovie', data);
        
    // },

    // getOne(state) {
    //     const data = movies.getOne();
    //     state.commit('getMovie', data)
    // }
}