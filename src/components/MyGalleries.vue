<template>
    <div>
        <h1>My Galleries</h1>
        <h2>{{gallery.name}}</h2>
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
import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            gallery:[],
        }
    },


    async created() {
        this.gallery = (await galleries.getOne(this.$route.params.id)).data
        // console.log(user)
    },

    methods: {
        ...mapActions([
            'getOne'
        ])
    },

    computed: {
      ...mapGetters({
         user: "auth/user",
        
      }),
      
  },
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