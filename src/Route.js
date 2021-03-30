import Vue from 'vue' ;
import Router from 'vue-router';
import Maincontain from './layout/MainContain'
Vue.use(Router);
export default new Router({
    linkExactActiveClass: 'active',
    routes:[
        {
            path: '/',
            redirect:'mainpart',
            component: Maincontain,
            children:[
                {
                    path:'/mainpart',
                    name:'mainPart',
                    redirect: '/mainpart/fir',
                    component:()=>import('./views/mainpart.vue'),
                    children:[
                        {
                            path: '/mainpart/fir',
                            name:'fir',
                            component:()=>import('./views/mainpart/fir.vue')
                        },
                        {
                            path: '/mainpart/sec',
                            name:'sec',
                            component:()=>import('./views/mainpart/sec.vue')
                        },
                        {
                            path: '/mainpart/thi',
                            name:'thi',
                            component:()=>import('./views/mainpart/thi.vue')
                        },
                        {
                            path: '/mainpart/for',
                            name:'for',
                            component:()=>import('./views/mainpart/for.vue')
                        },
                        {
                            path: '/mainpart/fif',
                            name:'fif',
                            component:()=>import('./views/mainpart/fif.vue')
                        },
                        {
                            path: '/mainpart/six',
                            name:'six',
                            component:()=>import('./views/mainpart/six.vue')
                        },

                        
                    ]
                },
                {
                    path:'/profile',
                    redirect:'/profile/usrinfo',
                    name:'profile',
                    component:()=>import('./views/profile.vue'),
                    children:[
                        {
                            path:'/profile/usrinfo',
                            name:'usrinfo',
                            component:()=>import('./views/profile/usrinfo.vue'),
                        },
                        {
                            path:'/profile/favinfo',
                            name:'favinfo',
                            component:()=>import('./views/profile/favinfo.vue'),
                        },
                        {
                            path:'/profile/indentinfo',
                            name:'indentinfo',
                            component:()=>import('./views/profile/indentinfo.vue'),
                        },
                    ]
                },{
                    path:'/trolley',
                    name:'trolley',
                    component:()=>import('./views/trolley.vue')
                },
                /*
                {
                    path:'/ground',
                    name:'ground',
                    component:()=>import('./views/ground.vue')
                },*/
            ]
        }
    ]
})