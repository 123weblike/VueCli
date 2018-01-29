import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import hh1 from '@/components/hh1'
import hh2 from '@/components/hh2'
import Params from '@/components/Params'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode:'history',    /*去掉url中的#*/
  /*mode:'hash',  多加一个#*/
  routes: [
    /*首页不能用alias别名，用了会不起作用*/
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld
      /*components:{
        default:HelloWorld,
        left:hh1,
        right:hh2,
      }*/
    },/*,{
      path: '/zf',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        left:hh2,
        right:hh1,

      }
    }*/{
     /* 利用url传递参数*/
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
     /* 配置路由的钩子函数*/
      /*beforeEnter:(to,from,next)=>{
        console.log(to);
        console.log(from);
        next(true);//true页面会跳转，false页面不会跳转
        //next（{path:'/'}）页面会跳转到首页面
      }*/
    },{
     /* vue-router重新定向 redirect 返回*/
      path:'/gohome',
      redirect:'/'
    },{
       path:'/goparams/:newsId(\\d+)/:newsTitle',
       redirect:'/params/:newsId(\\d+)/:newsTitle',
    },{
      path:'/hi',
      name:'hi',
      component:Hi,
      children:[
        {path:'/',name:'Hello/Hi',component:Hi},
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2},
      ]
    },{
      path:'/hi1',
      component:Hi1,
      alias:'/zhangf'
    },{
      path:'*',
      component:Error
    },{
      path:'/count',
      component:Count
    }
  ]
})
