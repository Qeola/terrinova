import { createRouter, createWebHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import NavBar from '../components/NavBar.vue'
import OurProducts from '../components/OurProducts.vue'
import OurStory from '../components/OurStory.vue'
// import BannerComp from '../components/BannerComp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComp
    },
    // {
    //   path: '/our-story',
    //   name: 'our-story',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../components/OurStory.vue')
    // },
    {
      path: '/navbar',
      name: 'navbar',
      component: NavBar
    },
    {
      path: '/products',
      name: 'products',
      component: OurProducts
    },
    {
      path: '/ourstory',
      name: 'ourstory',
      component: OurStory
    },
    // {
    //   path: '/banner',
    //   name: 'banner',
    //   component: BannerComp
    // },
  ]
})

export default router
