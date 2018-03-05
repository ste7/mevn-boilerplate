<template>
    <div class="warning_container">
        <div class="alert alert-danger" role="alert">
            {{ message }}
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Warning',

        props: ['message']
    }
</script>
