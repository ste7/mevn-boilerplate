<template>
    <div class="signup_container">

        <div class="row">

            <div class="col-md-8 offset-2">

                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="offset-1">
                                Sign Up
                            </div>
                        </div>
                    </div>

                    <div class="card-block">
                        <div class="row">
                            <div class="col-md-10 offset-1">

                                <form method="post" v-on:submit.prevent="create">
                                    <div class="form-group row">

                                        <label for="name" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Name</label>
                                        <div class="col-sm-9 col-md-9 col-lg-9">
                                            <input type="text" class="form-control form-control-sm" id="name" name="name" placeholder="Enter name"
                                                   v-model="name"
                                                   v-validate="'required|min:2|max:20'"
                                                   :class="{'name': true, 'is-invalid': errors.has('name') }">
                                            <small v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</small>
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <label for="email" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Email</label>
                                        <div class="col-sm-9 col-md-9 col-lg-9">
                                            <input type="email" class="form-control form-control-sm" id="email" name="email" placeholder="Enter email address"
                                                   v-model="email"
                                                   v-validate="'required|email|unique'"
                                                   :class="{'email': true, 'is-invalid': errors.has('email') }">
                                            <small v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</small>
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <label for="password" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Password</label>
                                        <div class="col-sm-9 col-md-9 col-lg-9">
                                            <input type="password" class="form-control form-control-sm" id="password" name="password" placeholder="Enter password"
                                                   v-model="password"
                                                   v-validate="'required|min:6|max:20|confirmed'"
                                                   :class="{'password': true, 'is-invalid': errors.has('password') }">
                                            <small v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
                                        </div>
                                    </div>

                                    <div class="form-group row">

                                        <label for="password_confirmation" class="col-sm-3 col-md-3 col-lg-3 col-form-label">Password</label>
                                        <div class="col-sm-9 col-md-9 col-lg-9">
                                            <input type="password" class="form-control form-control-sm" id="password_confirmation" name="password_confirmation" placeholder="Confirm password">
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <div class="col-sm-10 offset-sm-0 offset-md-0 offset-md-3">
                                            <button type="submit" class="btn btn-primary">SignIn</button>

                                            <a class="btn btn-link" href="/#/signin">Already have an account</a>
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
    import { signUp } from '../../app/actions';
    import { userExists } from '../../app/auth';
    import { bus } from '../../bus'


    export default {
        name: 'Signup',

        data() {
            return {
                name: null,
                email: null,
                password: null,

                signedIn: null
            }
        },

        methods: {
            create() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        signUp({
                            name: this.name,
                            email: this.email,
                            password: this.password
                        });

                        bus.$emit('sign-in', {
                            signedIn: true,
                            email: this.email
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
    a {
        color: #42b983;
    }
    label {
        float: left;
    }
    .card-header {
        margin-bottom: 20px;
    }
</style>
