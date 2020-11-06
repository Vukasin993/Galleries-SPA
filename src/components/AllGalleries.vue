<template>
    <div >
      <h1>All Galleries</h1>

      <div class="d-flex justify-content-around flex-wrap">
        
        <gallery-card v-for="(gallery,index) in filteredGalleries" :key="index"
        :gallery="gallery">
            
            
        </gallery-card>
        <div v-if="!filteredGalleries.length">
        <h1>Sorry, there is no gallery</h1>
        </div>
        <!-- <button @click="handleLoadMoreGalleries">Load more...</button>  -->
      </div>
        
       
    </div>
</template>

<script>
import GalleryCard from './GalleryCard'
import {mapGetters, mapActions} from 'vuex'

export default {

      components: {
        GalleryCard
      },

    created() {
      this.fetchGalleries();

    },
      computed: {
      ...mapGetters({
          filteredGalleries: "filteredGalleries",
          galleries: 'galleries'
      }),

      },
    
    methods: {
      ...mapActions( {
          fetchGalleries: 'fetchGalleries',

    }),


      },
    


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
</style>