<template>
    <div class="users_container">
        <h2 class="title">Users</h2>

        <user v-for="user in users" v-bind:key="user._id" v-bind:name="user.name" v-bind:email="user.email"></user>

    </div>
</template>


<script>
    import user from '@/components/users/User'

    import { getUsers } from '../../app/actions'
    import { userExists } from '../../app/auth'

    export default {
        name: 'Users',

        components: {
            user
        },

        data() {
            return {
                users: null
            }
        },

        mounted () {
            getUsers().then((response) => {
                this.users = response.data;
            });
        },

        created() {
            if (! userExists()) {
                window.location.replace('#/');
            }
        }
    }
</script>


<style>
    .title {
        text-align: center;
    }
</style>
