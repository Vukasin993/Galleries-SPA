<template>
    <div>
        <h1>My Galleries</h1>

        <h3>{{loggedUser.last_name}} {{loggedUser.first_name}}</h3>
      <div class="d-flex justify-content-center">
            <SearchGallery @handleSearchText="setSearchText"/>
        </div>
        <div class="d-flex justify-content-around flex-wrap">
            <div v-for="gallery in myGalleries" :key="gallery.id">
                <div class="card"  style="width: 300px; height: 800px; margin-bottom: 30px;">
                <img class="card-img-top" :src="gallery.images[0].source" alt="Card image cap">
                <h3 class="card-title"><router-link :to="{ name: 'authors', params: {id: gallery.user.id }}">{{gallery.name}}</router-link></h3>
                <ul class="list-group list-group-flush" >
                    <li class="list-group-item">{{gallery.description}}</li>
                    <li class="list-group-item">{{gallery.created_at}}</li>
                </ul>
                </div>  
            </div>
        </div>

       <button class="btn btn-primary" style="marginBottom: 15px" v-if="currentSize <= numberPerPage" @click="loadMoreGalleries">Load More</button>
    </div>
</template>

<script>
import SearchGallery from './SearchGallery'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        SearchGallery
    },

    data() {
        return {
            currentSize: 10,
            searchText: '',
        }
    },


    async created() {
        // this.myGalleries();
        // this.gallery = (await galleries.getOne(this.$route.params.id)).data;
        this.getLoggedUser();
    },

    methods: {
        ...mapActions({
             getMyGalleries: 'getMyGalleries',
             getLoggedUser: 'auth/getLoggedUser'
        }),

        loadMoreGalleries() {
            this.currentSize += 10
            this.getMyGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
        },
        setSearchText(search) {
                this.searchText = search
                this.getMyGalleries({'pagination': this.currentSize, 'searchText': this.searchText})
        },
        
    },
    beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getMyGalleries({'pagination':10, 'searchText': ''});
            })
      },

    computed: {
        ...mapGetters({
                authors: "authors",
                isUserAuthenticated: "auth/isUserAuthenticated",
                loggedUser: "auth/loggedUser",
                myGalleries: 'myGalleries',
                 numberPerPage: 'numberPerPage'
        })
    },

}
</script>

<style scoped>

</style>