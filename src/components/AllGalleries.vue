<template>
    <div >
      <div class="searchBar">
        <h1>All Galleries</h1>
      <div>
        <SearchGallery @handleSearchText="setSearchText"/>
      </div>
      </div>
      
      <div class="d-flex justify-content-around flex-wrap">
        
        <gallery-card v-for="gallery in galleries" :key="gallery.id"
        :gallery="gallery">
        </gallery-card>
        
        <!-- <div v-if="!galleries.length">
        <h1>Sorry, there is no gallery</h1>
        </div> -->
        
      </div>
       
       <button class="btn btn-primary" style="marginBottom: 15px" v-if="currentSize <= numberPerPage" @click="loadMoreGalleries">Load More</button>
    </div>
</template>

<script>
import SearchGallery from './SearchGallery'
import GalleryCard from './GalleryCard'
import {mapGetters, mapActions} from 'vuex'

export default {

      data() {
        return {
            searchText: '',
            currentSize: 10
        }
    },
      components: {
        GalleryCard,
        SearchGallery
      },

    // created() {
    //   this.fetchGalleries({'pagination': 5, 'searchText': ''});

    // },
      computed: {
      ...mapGetters({
          galleries: 'galleries',
          numberPerPage: 'numberPerPage'
      }),

      },
    
    methods: {
      ...mapActions( {
          fetchGalleries: 'fetchGalleries',

    }),


    loadMoreGalleries() {
      this.currentSize += 10
      this.fetchGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
    },

    setSearchText(search) {
      this.searchText = search
      this.fetchGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
    }

    },
    beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.fetchGalleries({'pagination':10, 'searchText': ''});
            })
      }
}
</script>

<style scoped>
   img {
        height: 400px;
        width: 400px;
    }

    ul {
    list-style-type: none;
    }

    .searchBar {
      display: flex;
      justify-content: space-between;
    }
</style>