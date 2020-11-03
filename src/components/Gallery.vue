<template>
    <div>
        <h1>Gallery</h1>
        <h2>{{gallery.name}}</h2>
        <div v-for="image in gallery.images" :key="image.id">
            <img class="card-img-top" :src="image.source" alt="Card image cap">
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