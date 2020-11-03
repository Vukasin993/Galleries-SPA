<template>
    <div>
        <h1>Authors</h1>
        <div>
            <h2>{{author.first_name}}</h2>
            <div v-for="author in author.galleries" :key="author.id">
                <h3>{{author.name}}</h3>
                <p>{{author.description}}</p>
                <!-- <img class="card-img-top" :src="author.images[0].source" alt="Card image cap"> -->
            </div>
            <!-- <p>{{author.galleries[0].name}}</p> -->
        </div>
    </div>
</template>

<script>
import {authors} from '../services/Author'
import {mapActions} from 'vuex'


export default {
    data() {
        return {
            author:[],
        }
    },

    async created() {
        this.author = (await authors.getOne(this.$route.params.id)).data
        // console.log(this.author.galleries.images[0])
    },

    methods: {
        ...mapActions([
            'getOneAuthor'
        ])
    }
}
</script>

<style scoped>

</style>