import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ForemanDetail from '@/views/ForemanDetail'
import JFooter from '@/components/JFooter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
      path: '/',
      name: 'JFooter',
      component: JFooter
    },{
      path: '/foreman-detail',
      name: 'foreman-detail',
      component: ForemanDetail
    }

  ]
})
