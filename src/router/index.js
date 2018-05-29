import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import liang from '@/components/liang'
import liang2 from '@/components/liang2'
import liang3 from '@/components/liang3'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/liang',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/liang',
    	name :'liang',
    	component:liang
    },
    {
    	path:'/liang2',
    	name :'liang2',
    	component:liang2
    },
    {
    	path:'/liang3',
    	name :'liang3',
    	component:liang3
    }
  ]
})

