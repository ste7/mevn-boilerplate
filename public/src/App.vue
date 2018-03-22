<template>
    <div id="app">
        <navbar></navbar>
        <router-view/>
    </div>
</template>

<script>
    import axios from 'axios'
    import navbar from '@/components/templates/Navbar'

    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    });

export default {
    name: 'App',

    components: {
        navbar
    }
}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
