<template>
    <div>
        <h1>All Galleries</h1>
        <gallery-card v-for="(gallery,index) in galleries" :key="index"
        :gallery="gallery">
            
            
        </gallery-card>
    </div>
</template>

<script>
import GalleryCard from './GalleryCard'
import {mapGetters, mapActions} from 'vuex'

export default {
      components: {
        GalleryCard
      },


      computed: {
      ...mapGetters([
          
          'galleries'
      ]),
      },
    methods: {
      ...mapActions( [
          'fetchGalleries'
      ]),
    },

    created() {
      this.fetchGalleries();
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