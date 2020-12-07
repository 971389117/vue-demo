<template>
  <div>
    <GrandSon v-on='$listeners' @sendOk="onSendOk" :bookList="bookList"></GrandSon>

    <GrandSon v-bind='$attrs'></GrandSon>
  </div>
</template>

<script>
import GrandSon from "./GrandSon";
export default {
  components: {
    GrandSon,
  },
  props: {
    name3:String
  },
  data() {
    return {
      bookList: [
        { bookName: "大秦帝国" },{ bookName: "三体"},{bookName: "好人平安"}
      ],
    };
  },
  methods: {
    onSendOk(status) {
      console.log(status);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
