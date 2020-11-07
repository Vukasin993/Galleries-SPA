<template>
    <div>
        <div class="card"  style="width: 300px; height: 800px; margin-bottom: 30px;">
            <img class="card-img-top" :src="gallery.images[0].source" alt="Card image cap">
            <h3 class="card-title"><router-link :to="{ name: 'gallery', params: {id: gallery.id }}" >Gallery: {{gallery.name}}</router-link></h3>
             <ul class="list-group list-group-flush" >
                <li class="list-group-item"><router-link :to="{ name: 'authors', params: {id: gallery.user.id }}">Author name: {{gallery.user.first_name}} {{gallery.user.last_name}}</router-link></li>
                <li class="list-group-item">{{gallery.created_at}}</li>
             </ul>
        </div>  
    </div>
</template>

<script>
// import {mapActions} from 'vuex'

export default {
    name: 'GalleryCard',


  props: {
        gallery :Object,
        user: Object
    },
}
</script>

<style  scoped>

</style>