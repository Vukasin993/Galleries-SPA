<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="submit">
             <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" class="form-control" id="password" v-model="password">
            </div>
            <button type="submit" class="btn btn-dark">Log in</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'Login',

    data() {
        return {
            email: "",
            password: "",
            errors: []
        };
    },

    methods: {
        ...mapActions({
            login: 'auth/login'
        }),

        submit() {
               this.login({
                    email: this.email,
                    password: this.password
                }).then(() => {

                    if(this.error === null) 
                    console.log('asdf')
                    this.$router.push({ name: "all-galleries"});
                });
            }
  

    }

}
</script>

<style scoped>

</style>




         