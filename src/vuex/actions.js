
import {galleries} from '../services/Galleries'
import {authors} from '../services/Author'

export const actions= {
    async fetchGalleries(state) {
        const data = await galleries.getAll();
        state.commit('setGalleries', data);
    },

    async getOne(state, id) {
        const { comments, ...gallery } = await galleries.getOne(id);
        console.log('got response', { comments, gallery })
        state.commit('setComments', comments)
        state.commit('setGallery', gallery)
    },

    async fetchImages(state) {
        const data = await this.fetchImages.getAll();
        state.commit('setImages', data)
    },

    getOneAuthor(state) {
        const data = authors.getOne();
        state.commit('getAuthor', data)
    },

    addComment(state) {
        const data = galleries.addComment();
        state.commit('addComment', data);
        console.log('akcija', data)
    },
     deleteComment(state, id) {
        galleries.deleteComment(id);
        state.commit('deleteComment', id)
    },

    deleteGallery(state, id) {
        galleries.deleteGallery(id);
        state.commit('deleteGallery', id)
    },
    // addMovie(state) {
    //     const data = movies.addMovie();
    //     state.commit('addMovie', data);
        
    // },


}