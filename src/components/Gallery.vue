<template>
    <div>
        <h1>Gallery</h1>
        <h2>{{gallery.name}}</h2>
        <h4><router-link :to="{ name: 'authors', params: {id: gallery.user.id }}">{{gallery.user.first_name}} {{gallery.user.last_name}}</router-link></h4>
        <p>{{gallery.created_at}}</p>
        <p>{{gallery.description}}</p>
        <div>
             <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                >
            
                     <b-carousel-slide v-for="(image,index) in gallery.images" :key="index"   :img-src="image.source" alt="Card image cap" >
                         
                     </b-carousel-slide>
            
         </b-carousel>
        </div>
       
    </div>
</template>

<script>
import {galleries} from '../services/Galleries'
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            gallery:[],
        }
    },


    async created() {
        this.gallery = (await galleries.getOne(this.$route.params.id)).data
        console.log(this.gallery.images)
    },

    methods: {
        ...mapActions([
            'getOne'
        ])
    }

    //       computed: {
    //   ...mapGetters([
          
    //       'images'
    //   ]),
    //   },
    // methods: {
    //   ...mapActions( [
    //       'getOne',
    //       'fetchImages'
    //   ]),
}
</script>

<style scoped>

</style>