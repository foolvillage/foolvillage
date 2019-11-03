import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Photo from '@/components/Photo'
import About from '@/components/About'

import Photo_1997 from '@/components/Photo_1997'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/photo',
            name: 'Photo',
            component: Photo
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/photo_1997',
            name: 'Photo_1997',
            component: Photo_1997
        }
    ]
})