<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goGo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi页面</router-link>|
      <!--参数传值-->
      <router-link :to="{name:'hi1',params:{username:'zhangfan',id:'888'}}">Hi页面1</router-link>|
      <router-link to="/hi/hi2">Hi页面2</router-link>
      <!--利用url传递参数-->
      <router-link to="/">Home</router-link>
      <router-link to="/params/198/zhangfan website is very good">params</router-link>
      <!--相当于  <a href=""></a>-->
     <!-- vue-router重新定向-->
      <router-link to="/gohome">goHome</router-link>
      <router-link to="/goparams/918/I like vue.js">goparams</router-link>
      <!--alias别名的使用-->
      <router-link to="/hi1">Hi1</router-link>
      <router-link to="/zhangf">zhangf</router-link>
      <!--404页面-->
      <router-link to="/3456">我是瞎写的</router-link>
    </div>
    <p>{{$route.name}}</p> <!-- 传路径的name值-->
     <!--路由的过渡动画-->
     <transition name="fade" mode="out-in">
       <router-view/>
     </transition>

    <!--单页面多路径区域操作-->
    <!--<router-view name="left" style="float:left;width:50%;height:300px;background-color: red"/>
    <router-view  name="right" style="float:right;width:50%;height:300px;background-color: green"/>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    /*vue-router编程式导航*/
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leve{
    opacity: 1;
  }
  .fade-leve-active{
    opacity: 0;
    transition:opacity .5s ;
  }
</style>
