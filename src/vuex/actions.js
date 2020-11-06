
import {galleries} from '../services/Galleries'
import {authors} from '../services/Author'

export const actions= {
    async fetchGalleries(state) {
        const data = await galleries.getAll();
        state.commit('setGalleries', data);
    },

    async myGalleries(state) {
        const data = await galleries.myGalleries();
        state.commit('setMyGalleries', data)
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

    getOneAuthor(state, id) {
        const data = authors.getOne(id);
        state.commit('setAuthor', data)
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