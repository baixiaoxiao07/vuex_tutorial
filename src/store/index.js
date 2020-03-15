import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        add(state){
            state.count++;
        },
        addN(state,step){
            state.count=state.count+step;
        },
        sub(state){
            state.count--;
        },
        subN(state,step){
            state.count=state.count-step;
        },
    },
    actions: {
        addAsync(context){
            setTimeout(() => {
            //在action中，不能直接修改state中数据；
            // 必须需通过context.commit()触发mutation才行
                context.commit('add');
            } , 1000)
        },
        //2. 将context和参数加入形参
        addNAsync(context,step){
            setTimeout(() => {
                context.commit('addN',step);
                // 3. 调用mutation中函数并带上参数
            }, 1000);
        },
        subAsync(context){
            setTimeout(() => {
                context.commit('sub');
            }, 1000);
        },
        subNAsync(context,step){
            setTimeout(()=>{
                context.commit('subN',4)
            },1000)
        },
    },
    getters:{
        showNum(state){
            return '当前最新数量是'+state.count
        }
        // showNum:state=>{
        //     return '当前最新数量是'+state.count
        // }
    },
    modules: {
    }
})
