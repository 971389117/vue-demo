<template>
  <div>
    来自儿子的信：{{ fromSon }}
    <hr />
    <!-- 父组件的值传递给自组件 -->
    <Son
      @sendparent="onSendparent"
      title="xiaoerzi"
      :parentValue="parentValue"
      :parentName="parentName"
    >
      <!-- <template #default>
            传入一些内容
        </template>
        <template #footer>
            传入一些内容
        </template> -->
    </Son>
    <hr />
    <button @click="onSubmit">提交到后台</button>
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
      parentValue: undefined,

      fromSon: "",
    };
  },
  methods: {
    onSendparent(value1) {
      this.fromSon = value1;
    },
    onSubmit() {
      this.fromSon;
      //   做一些ajax操作
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
