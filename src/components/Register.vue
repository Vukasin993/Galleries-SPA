<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form class="form-horizontal" @submit.prevent="onSubmit">
                <div class="alert alert-danger" v-if="errors.length"> 
                <ul class="mb-0">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
              <div class="form-group">
                <label for="first_name" class="cols-sm-2 control-label">First name</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="first_name"
                      type="text"
                      class="form-control"
                      name="first_name"
                      id="first_name"
                      required
                    />
                  </div>
                </div>
              </div>

            <div class="form-group">
                <label for="last_name" class="cols-sm-2 control-label">Last name</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="last_name"
                      type="text"
                      class="form-control"
                      name="last_name"
                      id="last_name"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email" class="cols-sm-2 control-label">Your Email</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="password" class="cols-sm-2 control-label">Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <div></div>
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="password_confirmation" class="cols-sm-2 control-label">Confirm Password</label>
                <div class="cols-sm-10">
                  <div class="input-group">
                    <span class="input-group-addon"></span>
                    <input
                      v-model="password_confirmation"
                      type="password"
                      class="form-control"
                      name="password_confirmation"
                      id="password_confirmation"
                      required
                    />
                  </div>
                </div>
              </div>
              
            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck" required>
                    <label class="form-check-label" for="gridCheck">
                        Accepte terms and conditions
                    </label>
                </div>
             </div>

                <br/>
              <div v-if="error" class="alert alert-danger" role="alert">Error</div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-lg btn-block login-button">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        errors: []
        
    };
  },
  computed: {
    ...mapGetters({
      error: "auth/errors"
    })
  },
  methods: {
    ...mapActions({
      register: "auth/register"
    }),

    onSubmit() {

        this.errors = [];

            if(!this.first_name) {
                this.errors.push('First name is required or to short.');
            }

            if(!this.last_name ) {
                this.errors.push('Last name is required.');
            }

             if(!this.email) {
                this.errors.push('email is required.');
            }
 
             if(!this.password || this.password.search(/\d/) == -1 || this.password.length < 8) {
                this.errors.push('Password is required, must have digit and at least 8 character');
            }

             if(!this.password_confirmation ) {
                this.errors.push('password_confirmation is required.');
            }

             if(this.password !== this.password_confirmation) {
                     this.errors.push('Passwords are not matching.');
                }
                

            // if (!this.errors.length) {
            //     const user = {
            //         first_name: this.first_name,
            //         last_name:this.last_name,
            //         email: this.email,
            //         password: this.password,
            //         password_confirmation: this.password_confirmation,
            //     };
            //     this.register(user)
            //     this.$router.push('/all-galleries')
                
            // } else {
            //     console.log('Bad register');
            // }

               this.register({
                    first_name: this.first_name,
                    last_name:this.last_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                }).then(() => {

                    if(this.errors === null) {
                       this.$router.push({ name: "all-galleries"});
                    } else {
                      console.log('bad request');
                    }
                   
                });
            
        },
  }
};
</script>

<style  scoped>

</style>




         