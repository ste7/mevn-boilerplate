<template>
    <div class="signin_container">
        <div class="row">

            <div class="col-md-8 offset-2">


                <warning v-if="error" :message="error"></warning>


                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="offset-1">
                                Sign In
                            </div>
                        </div>
                    </div>

                    <div class="card-block">
                        <div class="row">
                            <div class="col-md-10 offset-1">

                                <form method="post" v-on:submit.prevent="submit">
                                    <div class="form-group row">

                                        <label for="email" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Email</label>
                                        <div class="col-sm-9 col-md-9 col-lg-9">
                                            <input type="email" class="form-control form-control-sm" id="email" name="email" placeholder="Enter email address"
                                                   v-model="email"
                                                   v-validate="'required|email'"
                                                   :class="{'email': true, 'is-invalid': errors.has('email') }">
                                            <small v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</small>
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <label for="password" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Password</label>
                                        <div class="col-sm-9 col-md-9 col-lg-9">
                                            <input type="password" class="form-control form-control-sm" id="password" name="password" placeholder="Enter password"
                                                   v-model="password"
                                                   v-validate="'required'"
                                                   :class="{'password': true, 'is-invalid': errors.has('password') }">
                                            <small v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-8 offset-sm-0 offset-md-3">
                                            <button type="submit" class="btn btn-primary">SignIn</button>


                                            <a class="btn btn-link" href="/#/signup">Create account</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { signIn } from '../../app/actions'
    import { userExists } from '../../app/auth'
    import { bus } from '../../bus'
    import Warning from "../templates/Warning.vue";


    export default {
        components: {Warning},
        name: 'Signin',

        data() {
            return {
                email: null,
                password: null,
                error: null
            }
        },

        methods: {
            submit() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        signIn({
                            email: this.email,
                            password: this.password,
                        }).catch((err) => {
                            this.error = 'The email or password you entered did not match our records.';
                        });

                        return true;
                    }
                });
            }
        },

        created() {
            if (userExists()) {
                window.location.replace('#/');
            }
        }
    }
</script>


<style>
    h1, h2 {
        font-weight: normal;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    label {
        float: left;
    }
    .title {
        text-align: center;
    }

    .card-header {
        margin-bottom: 20px;
    }
</style>
