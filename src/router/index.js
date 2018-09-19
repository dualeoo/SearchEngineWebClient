import Vue from 'vue'
import Router from 'vue-router'
import SearchPage from '@/components/SearchPage'
import ResultPage from '@/components/ResultPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchPage',
      component: SearchPage
    },
    {
      path: '/result/:query',
      name: 'ResultPage',
      component: ResultPage,
      props: true
    }
  ]
})
