<template>
    <div >
      <h1>All Galleries</h1>

      <div class="d-flex justify-content-around flex-wrap">
        
        <gallery-card v-for="(gallery,index) in galleries" :key="index"
        :gallery="gallery">
            
            
        </gallery-card>
        <div v-if="!galleries.length">
        <h1>Sorry, there is no gallery</h1>
        </div>
        
      </div>
        <button @click="handleLoad">Load more...</button> 
       
    </div>
</template>

<script>
import GalleryCard from './GalleryCard'
import {mapGetters, mapActions} from 'vuex'

export default {

      data() {
        return {
            pagination : 10,
            currentSize: 10
        }
    },
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

          handleLoad() {
          this.currentSize += this.pagination
                  this.fetchGalleries(this.currentSize)
            },
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