<template>
    <div>
        <h1>Edit Gallery</h1>
            <form @submit.prevent="editGallery">
            <!-- <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div> -->
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

export default {
    data() {
        return {
            name: '',
            description: '',
            images: [{ source: ''}]
        }
    }
}
</script>

<style scoped>

</style>