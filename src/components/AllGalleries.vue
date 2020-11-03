<template>
    <div>
        <h1>All Galleries</h1>
        <h2>askdfdsf</h2>
        <ul v-for="gallerie in galleries" :key="gallerie.id">
            <li>sdfdsf</li>
            <li>{{gallerie.name}}</li>
            <li>{{gallerie.description}}</li>
            <li>{{gallerie.user_id}}</li>
            <li>{{gallerie.user.first_name}}</li>
            <li>{{gallerie.images[0].source}}</li>
            <img class="card-img-top" :src="gallerie.images[1].source" alt="Card image cap">
            
        </ul>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {


  props: {
        gallerie :Object,
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
</style>