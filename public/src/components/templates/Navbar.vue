<template>
    <div class="navbar_container">

        <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <a class="navbar-brand" href="#/">MEVNstack</a>

            <ul class="navbar-nav nav">
                <li class="nav-item">
                    <a class="nav-link" href="#/users">Users</a>
                </li>
            </ul>


            <ul class="nav-item dropdown navbar-nav ml-auto">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="nav-item dropdown navbar-nav ml-auto">

                        <div v-if="signedIn === true">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown" v-model="user">
                                {{ user.email }}
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#" v-on:click="signOut">SignOut</a>
                            </div>
                        </div>


                        <div v-else>
                            <ul class="nav-item navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#/signin">SignIn</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#/signup">SignUp</a>
                                </li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </ul>
        </nav>
    </div>
</template>


<script>
    import { signOut } from '../../app/actions'
    import { userExists, getUser } from '../../app/auth'
    import { bus } from '../../bus'


    export default {
        name: 'Navbar',

        data() {
            return {
                user: null,
                signedIn: false
            }
        },

        mounted () {
            this.signedIn = userExists();
            this.user = getUser();
        },

        created () {
            bus.$on('sign-in', val => {
                this.signedIn = val.signedIn;
                this.user = val;
            });
        },

        methods: {
            signOut() {
                signOut();
                this.$nextTick(function () {
                    this.signedIn = false;
                })
            }
        }
    }
</script>


<style>
    .navbar_container {
        margin-bottom: 40px;
    }
</style>
