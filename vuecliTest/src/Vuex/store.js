import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
/*状态对象，装共享值状态对象*/
const state={
  count:3     //共享值
}
/*改变共享值的状态 同步的*/
const mutations={
  add(state,n){
    state.count+=n;
  },
  reduce(state){
    state.count--;
  }
}
/*getter计算过滤操作，相当于computed*/
const getters={
   count:function(state){
     return state.count+=10;
   }
};
/*actions异步修改状态*/
const actions={
    addActions(context){ //context为上下文对象
      context.commit('add',10);
      /*加setTimeout体现出actions的异步状态*/
      setTimeout(()=>{context.commit('reduce')},5000);
      console.log('我比reduce先执行了');
    },
    reduceActions({commit}){
      commit('reduce');
    }
};
/*module模块组*/
const moduleA={
  state,
  mutations,
  getters,
  actions
}
export default new Vuex.Store({
 /* state,
  mutations,
  getters,
  actions*/
 modules:{a:moduleA}

})
