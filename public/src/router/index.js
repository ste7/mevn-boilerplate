import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'
import Users from '@/components/users/Users'
import NotFound from '@/components/NotFound'

Vue.use(Router);


import * as beforeEnter from './beforeEnter'


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: (to, from, next) => {
                beforeEnter.authenticate(to, from, next)
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup,
            beforeEnter: (to, from, next) => {
                beforeEnter.isAuthenticated(to, from, next)
            }
        },
        {
            path: '/signin',
            name: 'signin',
            component: Signin,
            beforeEnter: (to, from, next) => {
                beforeEnter.isAuthenticated(to, from, next)
            }
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
            beforeEnter: (to, from, next) => {
                beforeEnter.authenticate(to, from, next)
            }
        },
        {
            path: '*',
            name: 'notfound',
            component: NotFound
        }
    ]
})



export default router
