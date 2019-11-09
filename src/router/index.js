import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Photo from '@/components/Photo'
import About from '@/components/About'

import Photo_1997 from '@/components/Photo_1997'
import Photo_1998 from '@/components/Photo_1998'
import Photo_1999 from '@/components/Photo_1999'
import Photo_2000 from '@/components/Photo_2000'
import Photo_2001 from '@/components/Photo_2001'
import Photo_2002 from '@/components/Photo_2002'
import Photo_2003 from '@/components/Photo_2003'
import Photo_2004 from '@/components/Photo_2004'
import Photo_2005 from '@/components/Photo_2005'
import Photo_2006 from '@/components/Photo_2006'
import Photo_2007 from '@/components/Photo_2007'
import Photo_2008 from '@/components/Photo_2008'
import Photo_2009 from '@/components/Photo_2009'
import Photo_2010 from '@/components/Photo_2010'
import Photo_2011 from '@/components/Photo_2011'
import Photo_2012 from '@/components/Photo_2012'
import Photo_2013 from '@/components/Photo_2013'
import Photo_2014 from '@/components/Photo_2014'
import Photo_2015 from '@/components/Photo_2015'
import Photo_2016 from '@/components/Photo_2016'
import Photo_2017 from '@/components/Photo_2017'
import Photo_2018 from '@/components/Photo_2018'
import Photo_2019 from '@/components/Photo_2019'

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
        },
        {
            path: '/photo_1998',
            name: 'Photo_1998',
            component: Photo_1998
        },
        {
            path: '/photo_1999',
            name: 'Photo_1999',
            component: Photo_1999
        },
        {
            path: '/photo_2000',
            name: 'Photo_2000',
            component: Photo_2000
        },
        {
            path: '/photo_2001',
            name: 'Photo_2001',
            component: Photo_2001
        },
        {
            path: '/photo_2002',
            name: 'Photo_2002',
            component: Photo_2002
        },
        {
            path: '/photo_2003',
            name: 'Photo_2003',
            component: Photo_2003
        },
        {
            path: '/photo_2004',
            name: 'Photo_2004',
            component: Photo_2004
        },
        {
            path: '/photo_2005',
            name: 'Photo_2005',
            component: Photo_2005
        },
        {
            path: '/photo_2006',
            name: 'Photo_2006',
            component: Photo_2006
        },
        {
            path: '/photo_2007',
            name: 'Photo_2007',
            component: Photo_2007
        },
        {
            path: '/photo_2008',
            name: 'Photo_2008',
            component: Photo_2008
        },
        {
            path: '/photo_2009',
            name: 'Photo_2009',
            component: Photo_2009
        },
        {
            path: '/photo_2010',
            name: 'Photo_2010',
            component: Photo_2010
        },
        {
            path: '/photo_2011',
            name: 'Photo_2011',
            component: Photo_2011
        },
        {
            path: '/photo_2012',
            name: 'Photo_2012',
            component: Photo_2012
        },
        {
            path: '/photo_2013',
            name: 'Photo_2013',
            component: Photo_2013
        },
        {
            path: '/photo_2014',
            name: 'Photo_2014',
            component: Photo_2014
        },
        {
            path: '/photo_2015',
            name: 'Photo_2015',
            component: Photo_2015
        },
        {
            path: '/photo_2016',
            name: 'Photo_2016',
            component: Photo_2016
        },
        {
            path: '/photo_2017',
            name: 'Photo_2017',
            component: Photo_2017
        },
        {
            path: '/photo_2018',
            name: 'Photo_2018',
            component: Photo_2018
        },
        {
            path: '/photo_2019',
            name: 'Photo_2019',
            component: Photo_2019
        }
    ]
})