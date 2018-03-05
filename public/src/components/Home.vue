<template>
    <div class="home_container">

    </div>
</template>

<script>
    import { userExists } from '../app/auth'

    export default {
        name: 'Home',

        created() {
            if (! userExists()) {
                window.location.replace('#/signin');
            }
        }
    }
</script>
