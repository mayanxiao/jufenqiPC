import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ForemanDetail from '@/views/ForemanDetail'
import JFooter from '@/components/JFooter'
import Index from '@/views/Index'
import Plans from '@/views/Plans'
import Mall from '@/views/Mall'
import User from '@/views/User'
import CaseDc from '@/views/CaseDc'
import DcDiary from '@/views/DcDiary'
import DcStrategy from '@/views/DcStrategy'
import Install from '@/views/Install'
import DiaryCon from '@/views/DiaryCon'
import Order from '@/views/Order'
import Product from '@/views/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/foreman-detail',
      name: 'foreman-detail',
      component: ForemanDetail
    },
    {
      path: '/plans',
      name: 'Plans',
      component: Plans
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/case-dc',
      name: 'CaseDc',
      component: CaseDc
    },
    {
      path: '/dc-diary',
      name: 'DcDiary',
      component: DcDiary
    },
    {
      path: '/dc-Strategy',
      name: 'DcStrategy',
      component: DcStrategy
    },
    {
      path: '/installment',
      name: 'Install',
      component: Install
    },
    {
      path: '/diary-con',
      name: 'DiaryCon',
      component: DiaryCon
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },

  ]
})