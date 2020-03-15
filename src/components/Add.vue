<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ this.$store.state.count }}</h3> -->
    <h3>{{this.$store.getters.showNum}}</h3>
    <button @click="btnhandler">+1</button>
    <button @click="btnhandler2(2)" >+N</button>
    <br>
    <button @click="btnhandler3">异步+1</button>
    <button @click="btnhandler4(5)">异步+N</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      btnhandler:function(){
          this.$store.commit('add');
      },
      btnhandler2(n){
          this.$store.commit('addN',n)
      },
      btnhandler3(){
          //这里dispatch函数，专门用来触发action
          this.$store.dispatch('addAsync')
      },
      btnhandler4(n){
        //   1. 调用dispatch函数触发action时携带参数
          this.$store.dispatch('addNAsync',n)
      }
  }
};
</script>

<style></style>
