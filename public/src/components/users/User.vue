<template>
    <div class="user_container">

        <div class="media">
            <div class="media-left">
                <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/30-512.png" class="media-object" style="width:45px">
            </div>
            <div class="media-body">
                <h6 class="media-heading">{{ this.name }}</h6>
                <span>{{ this.email }}</span>
            </div>
        </div>

        <hr>

    </div>
</template>


<script>
    export default {
        name: 'User',

        props: ['name', 'email']
    }
</script>


<style>
    img {
        margin-right: 10px;
    }
</style>
