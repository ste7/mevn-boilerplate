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

                        <div v-if="user.authenticated">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                {{ user.data.email }}
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#" v-on:click="out">SignOut</a>
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
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Navbar',

        computed: {
            ...mapGetters({
                user: 'getUser'
            })
        },

        methods: {
            ...mapActions({
                signOut: 'signOut'
            }),
            out() {
                this.signOut();
                this.$nextTick(function () {
                    window.location.replace('#/signin');
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
