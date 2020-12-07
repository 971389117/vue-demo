<template>
  <div>
    <p>来自儿子的信：{{ fromSon }}</p>
    <p>来自孙子的信：{{fromGrandSon}}</p>
    <hr />
    <!-- 父组件的值传递给自组件 -->
    <Son
      @sendparent="onSendparent"
      @send-grand-parent='onSendGrandParent'

      :parentValue="parentValue"
      :parentName="parentName"
    >
    </Son>


  <!--   -->
    <!-- <p @click='a'}>v-on测试</p> -->
  </div>
</template>

<script>
import Son from "./Son";
export default {
  name: "ComponentsDemo3Event",
  components: {
    Son,
  },
  data() {
    return {
      parentName: "parentName",
      parentValue: "parentValue",

      fromGrandSon: "",
      fromSon: "",
    };
  },
  methods: {
    onSendparent(value1) {
      this.fromSon = value1;
    },
    onSendGrandParent(value){
      this.fromGrandSon=value
      console.log(this.$listeners)
    },

  },
};
</script>

<style lang="scss" scoped>
</style>
