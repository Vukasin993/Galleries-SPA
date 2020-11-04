<template>
    <div>
        <h1>Create new Gallery</h1>
            <form @submit.prevent="addGallery">
            <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
        <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input v-model="name" type="text" class="form-control"  placeholder="Name">
            </div>
        </div>
        <div class="form-group row">
             <label for="description" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
            <input v-model="description" type="text" class="form-control"  placeholder="Description">
            </div>
       
            <label for="source" class="col-sm-2 col-form-label">Source of Image</label>
            <div class="col-sm-10">
            <input v-model="images[index]" type="url" class="form-control">
            </div>
       
        </div>
        <button>Submit</button>
        </form>
    </div>
</template>

<script>
import {galleries} from '../services/Galleries'
import {mapGetters} from 'vuex'

export default {
    name: 'create-new-gallery',

    data() {
        return {
                
                    name: '',
                    description: '',
                    user_id: '',
                    images: [{source: ''}],
                    errors: [],
            }
    },

    methods: {

        ...mapGetters ({
            user: 'auth/user'
        }),

        // userId() {
        //     return this.authors.user_id; 
        // },

        addGallery() {
            this.errors = [];

            if(!this.name) {
                this.errors.push('Name is required.');
            }

             if(!this.description) {
                this.errors.push('Description is required.');
            }

             if(!this.images ) {
                this.errors.push('Source is required.');
            }
            if (!this.errors.length) {
                const data = {
                    name: this.name,
                    description: this.description,
                    images: this.images,
                    user_id: this.user.id
                    
                };
                galleries.add(data)
                this.$router.push('/')
                console.log(data.user_id)
            }
            
        },
    }
}
</script>

<style scoped>

</style>