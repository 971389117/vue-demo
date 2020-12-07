<template>
  <div></div>
</template>

<script>
import { category } from "@/api";
export default {
  name: "RequestDemo",
  data() {
    return {
      tableData: "",
    };
  },
  //   async created() {
  //       let res = await category();
  //       console.log(res);
  //       // 等拿到返回数据res后再进行处理
  //       this.tableData = res.data.result;
  //       this.totalData = res.data.count;
  //   },
  async mounted() {
    category().then((res) => {
      console.log(res);
      // 等拿到返回数据res后再进行处理
      this.tableData = res.data.result;
      this.totalData = res.data.count;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
