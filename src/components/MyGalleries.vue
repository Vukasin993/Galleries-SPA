<template>
    <div>
        <h1>My Galleries</h1>

        <h3>{{loggedUser.last_name}} {{loggedUser.first_name}}</h3>
    
        <div class="d-flex justify-content-around flex-wrap">
            <div v-for="gallery in loggedUser.galleries" :key="gallery.id">
                <div class="card"  style="width: 300px; height: 800px; margin-bottom: 30px;">
                <img class="card-img-top" :src="gallery.images[0].source" alt="Card image cap">
                <h3 class="card-title">{{gallery.name}}</h3>
                <ul class="list-group list-group-flush" >
                    <li class="list-group-item">{{gallery.description}}</li>
                    <li class="list-group-item">{{gallery.created_at}}</li>
                </ul>
                </div>  
            </div>
        </div>

       
    </div>
</template>

<script>
// import {galleries} from '../services/Galleries'
import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            // gallery:[],
        }
    },


    async created() {
        this.getOne(this.$route.params.id);
        // this.gallery = (await galleries.getOne(this.$route.params.id)).data;
        this.getLoggedUser();
    },

    methods: {
        ...mapActions({
             getOne: 'getOne',
             getLoggedUser: 'auth/getLoggedUser'
        })
    },

    computed: {
        ...mapGetters({
                authors: "authors",
                isUserAuthenticated: "auth/isUserAuthenticated",
                loggedUser: "auth/loggedUser",
                gallery: 'gallery'
        })
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