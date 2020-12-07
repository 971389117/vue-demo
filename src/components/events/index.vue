<template>
  <div>
    <!-- @ 是指令 v-on 的缩写  -->
    <h4>简单表达式</h4>
    <button @click="counter += 1">button 1 {{ counter }}</button>
    <button @click="show=true">button 2{{show}}</button>

    <h4>函数</h4>
    <button @click="addOne">button 3 {{ counter }}</button>

    <!-- $event 关键字，代表原生event对象 -->
    <h4>可以传入参数</h4>
    <button @click="addOne(1, $event)">button 4 {{ counter }}</button>

    <h4>可以是一个对象</h4>
    <button v-on="{ mousedown: doThis, mouseup: doThat }">button5 {{counter}}</button>
  </div>
</template>

<script>
export default {
  name: "Events",
  data() {
    return {
      counter: 0,
      show:false,
    };
  },
  methods: {
    addOne(first, second) {
        this.counter++
      console.log("==first: ", first, "==second :", second,'==counter: ',this.counter);
    },

    doThis(){
        console.log('doThis')
        this.counter++
    },
    doThat(){
        this.counter++
        console.log('doThat')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
