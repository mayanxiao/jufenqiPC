import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ForemanDetail from '@/views/ForemanDetail'
import dryGoods from '@/views/dryGoods'
import JFooter from '@/components/JFooter'
import Index from '@/views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/foreman-detail',
      name: 'foreman-detail',
      component: ForemanDetail
    },
    {
      path: '/dry-goods',
      name: 'dry-goods',
      component: dryGoods
    }
    // {
    //   path: '/index',
    //   name: 'Index',
    //   component: Index
    // }

  ]
})