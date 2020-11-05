export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload
    },  
    getGallery(state, id) {
        state.galleries = state.galleries.filter(galleries=> galleries.id === id)
    },

    setImages(state, payload) {
        state.images =payload
    },

    setAuthors(state, payload) {
        state.authors = payload
    },

    getAuthor(state, id){
        state.authors= state.authors.filter(authors=>authors.id === id)
    },
    
    addGallery(state, payload) {
        state.galleries = payload
        
    },

    addComment(state, payload) {
        state.comments = payload
    },

    deleteComment(state, id) {
        state.comments = state.comments.filter(comments => comments.id !== id)
    },

    deleteGallery(state,id) {
        state.galleries = state.galleries.filter(galleries => galleries.id !== id);
    },


    // setSearchText(state, searchText) {
    //     state.searchText = searchText;
    // },

    // setCounter(state, payload){
    //     state.counter = payload;
    // },

  
}