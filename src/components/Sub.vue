<template>
  <div>
    <h3>当前最新的count值为：{{ count }}</h3>
    <button @click="btnhandler">-1</button>
    <button @click="btnhandler2">-N</button>
    <br>
    <button @click="btnhandler3">异步-1</button>
    <button @click="subNAsync">异步-N</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {//将getter引入计算属性
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    ...mapActions(["subAsync","subNAsync"]),
    btnhandler() {
      this.sub();
    },
    btnhandler2() {
      this.subN(3);
    },
    btnhandler3(){
        this.subAsync();
    },
  }
};
</script>

<style></style>
