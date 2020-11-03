export const mutations = {
    setGalleries(state, payload) {
        state.galleries = payload
    },  
    getGallery(state, id) {
        state.galleries = state.galleries.filter(galleries=> galleries.id === id)
    },

    setImages(state, payload) {
        state.images =payload
    }
    // deleteMovie(state,id) {
    //     state.movies = state.movies.filter(movies => movies.id !== id);
    // },

    // addMovie(state, payload) {
    //     state.movies = payload
        
    // },
    // setSearchText(state, searchText) {
    //     state.searchText = searchText;
    // },

    // setCounter(state, payload){
    //     state.counter = payload;
    // },

  
}