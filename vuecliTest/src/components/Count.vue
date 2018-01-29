<template>
    <div>
      <h2>{{msg}}</h2>
      <hr>
      <!--<h3>{{$store.state.count}}</h3>--> <!-- 直接获取store里的count-->
      <!--简写形式，运用mapState-->
     <!-- <h3>{{count}}</h3>-->
     <!-- module模块组方式(不建议使用)-->
      <!--<h3>{{$store.state.a.count}}</h3>-->
      <!-- module模块组方式的简写形式-->
      <h3>{{count}}</h3>
      <p>
        <button @click="$store.commit('add',10)">+</button>
        <!--<button @click="$store.commit('reduce')">-</button>-->
        <!--简写形式，运用mapMutations-->
        <button @click="reduce">-</button>
      </p>
      <p>
        <button @click="addActions">+</button>
        <button @click="reduceActions">-</button>
      </p>
    </div>
</template>
<script>
  import store from '@/Vuex/store';
  /*对相应的操作进行简写，需要vuex自带的属性*/
  import {mapState,mapMutations,mapGetters,mapActions} from 'Vuex';
  export default {
    data(){
      return {
        msg:'Hello Vuex'
      }
    },
    /*1.计算属性*/
    /*computed:{
      count(){
        return this.$store.state.count
      }
    },*/
    /*2.运用mapState  es6*/
   /* computed:mapState({
      count:state=>state.count
    }),*/
  /* 3.数组的方法：*/
    /*computed:mapState(['count']),*/
   /* 4.es5的写法：*/
   /*computed:mapState({
       count:function(state){
         return state.count;
       }
  }),*/
   computed:{
     //...mapState(['count']),
     /*count(){
       return this.$store.getters.count
     }*/
     //<!--简写形式，运用mapGetters-->
     //...mapGetters(['count'])
     count(){
       return this.$store.state.a.count
     }
   },
    /*methods:mapMutations(['add','reduce']),*/
    methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(['addActions','reduceActions'])
    },
    store
  }

</script>
