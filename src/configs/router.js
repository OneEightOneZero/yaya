import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)


import App from '../App.vue'
import Yaya from '../pages/Yaya.vue'
import Fenlei from '../pages/Fenlei.vue'
import News from '../pages/News.vue'
import Cart from '../pages/Cart.vue'
import Mine from '../pages/Mine.vue'

const routes = [
    {
        name: 'app',
        path: '/app',
        component: App,
        children: [
            {
                name: 'yaya',
                path: '/yaya',
                component: Yaya,
            },
            {
                name: 'fenlei',
                path: '/fenlei',
                component: Fenlei,
            },
            {
                name: 'news',
                path: '/news',
                component: News,
            },
            {
                name: 'cart',
                path: '/cart',
                component: Cart,
            },
            {
                name: 'mine',
                path: '/mine',
                component: Mine,
            }
        ]
    },
    {
        path:'/',
        redirect:{
            name:"yaya"
        }
    }
    //  {
    //     name:'login',
    //     path:'/login',
    //     component:Login
    //  }
]

const router = new vueRouter({
    mode: 'hash',
    routes,
})

export default router