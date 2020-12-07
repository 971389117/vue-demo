<template>
  <div title="sub-title" class="sub-class">

    <GrandChildren fromProps="go go go"></GrandChildren>
    子组件
    <div ref="div1"></div>
    <GrandChildren ref="gc1" say="hello"></GrandChildren>
    <GrandChildren say="go go go"></GrandChildren>
  </div>
</template>

<script>
import GrandChildren from "./GrandChildren";
export default {
  components: {
    GrandChildren,
  },

//   props: {
//     custom: String,
//   },
  mounted() {
    // 所有父组件传入的，没有被props接收的属性
    console.log("$attrs", this.$attrs);


    // 返回组件实例 VueComponent  &  this

    // 祖先组件
    console.log("$root", this.$root, this.$root.appName);

    // 父组件
    console.log("$parent", this.$parent, this.$parent.msg);

    // 自定义子组件List
    console.log(
      "$children",
      this.$children,
      this.$children[0].say,
      this.$children[1].say
    );

    // 可以获得DOM元素
    console.log("$refs", this.$refs);
  },
};
</script>

<style lang="scss" scoped>
</style>
