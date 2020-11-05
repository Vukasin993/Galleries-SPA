<template>
    <div>
        <h1>Gallery</h1>
        <h2>{{gallery.name}}</h2>
        <h3>{{gallery.user.id}}</h3>
        <h4><router-link :to="{ name: 'authors', params: {id: gallery.user.id }}">{{gallery.user.first_name}} {{gallery.user.last_name}}</router-link></h4>
        <p>{{gallery.created_at}}</p>
        <p>{{gallery.description}}</p>
                <div class="card-body" >
              
                <button type="button" @click="deleteGallery(gallery.id)"  v-if="isUserAuthenticated && gallery.user.id == loggedUser.id" class="btn btn-danger">Delete Gallery</button>
          </div>
 
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

        <h3>Comments:</h3>
        <div v-for="comment in gallery.comments" :key="comment.id" :comment="comment">
            <p>{{comment.user_id}} <span>{{comment.text}}</span></p> 
           <button v-if="isUserAuthenticated && comment.user_id == loggedUser.id" @click="deleteComment(comment.id)">Delete</button>

       </div>
       <div class>
      <div class="row">
        
              <form @submit.prevent="onSubmit" class="form-inline" v-if="isUserAuthenticated">
                <textarea
                  v-model="form.text"
                  placeholder="Write your comment here!"
                  class="pb-cmnt-textarea"
                ></textarea> 
                <button class="btn btn-primary pull-right" type="submit">Add Comment</button>
              </form>
             
       
      </div>
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
            form: { 
                author: "", 
                text: "", 
                user_id: "", 
                gallery_id: "" 
                }
        }
    },

    props: {
        comments: Object
    },


    async created() {
        this.gallery = (await galleries.getOne(this.$route.params.id)).data,
        this.getLoggedUser();
       
    },

    methods: {
        ...mapActions({
            getOne: 'getOne',
            addComment: 'addComment',
            getLoggedUser: 'auth/getLoggedUser',
            deleteGallery: 'deleteGallery',
            deleteComment: 'deleteComment'
        }),



        onSubmit() {
    
            this.form.author = this.user.first_name + " " + this.user.last_name;
            this.form.author_id = this.user.id;
            this.form.gallery_id = this.gallery.id;
            this.addComment(this.form);
        }
    },

      computed: {
    ...mapGetters({
            authors: "authors",
            isUserAuthenticated: "auth/isUserAuthenticated",
            loggedUser: "auth/loggedUser"
    })
  },

}
</script>

<style scoped>
    .row {
        margin-left: 600px;

    }
</style>