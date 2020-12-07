<template>
  <div>
    <p>
      {{ 3 + 3 }} -- {{ flag1 === flag2 }} -- {{ flag1 ? "三元" : "表达式" }} --
      {{ msg.split("").reverse().join("") }}
    </p>

    <p>
      {{ msg }}
      ---
      {{ reverseMsg }}
    </p>











    <!--
        computed和methods的区别
            只要依赖的响应式数据不变，computed就会缓存计算结果
            methods每次都会运行
     -->
    <!-- {{ fun() }} -->

    <p>
      <a title="title" :id="aID" href="#">v-bind</a>
      <a title="title" :id="aID + 3" href="#">v-bind</a>
    </p>

    <!--
        自定义子组件 属性会附着在子组件的根元素上
        如果子组件根元素有同名的属性
            如果是class,style会合并
            如果不是，会覆盖
     -->

    <!-- <Child
      class="child-class"
      title="title"
      :id="aID"
      custom="customProp"
    ></Child> -->
  </div>
</template>

<script>
export default {
  provide: {
    fromInject: "fromInject",
  },

  data() {
    return {
      msg: "Hello Vue",

      flag1: true,
      flag2: false,

      aID: "aID",
    };
  },

  computed: {
    reverseMsg() {
      return this.msg.split("").reverse().join("");
    },
  },
  methods: {
    fun() {
      return "methods";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
