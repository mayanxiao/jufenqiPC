import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ForemanDetail from '@/views/ForemanDetail'
import dryGoods from '@/views/dryGoods'
import JFooter from '@/components/JFooter'
import Index from '@/views/Index'
import Impression from '@/views/Impression'
import Index1 from '@/views/Index1'
import Plans from '@/views/Plans'
import Foreman from '@/views/Foreman'
import FindDc from '@/views/FindDc'
import Build from '@/views/Build'
import CaseInfo from '@/views/CaseInfo'
import User from '@/views/User'
import Strategy from '@/views/Strategy'
import DcDiary from '@/views/DcDiary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index1',
      component: Index1
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
    },
    {
      path: '/impression',
      name: 'Impression',
      component: Impression
    },
    {
      path: '/test',
      name: 'Index',
      component: Index
    },
    {
      path: '/plans',
      name: 'Plans',
      component: Plans
    },
    {
      path: '/foreman',
      name: 'Foreman',
      component: Foreman
    },
    {
      path: '/find-dc',
      name: 'FindDc',
      component: FindDc
    },
    {
      path: '/build',
      name: 'Build',
      component: Build
    },
    {
      path: '/case-info',
      name: 'CaseInfo',
      component: CaseInfo
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: Strategy
    },
    {
      path: '/dc-diary',
      name: 'DcDiary',
      component: DcDiary
    }
    // {
    //   path: '/index',
    //   name: 'Index',
    //   component: Index
    // }

  ]
})