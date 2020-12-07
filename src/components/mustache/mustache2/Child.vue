<template>
  <div title="sub-title" class="sub-class">
    <GrandChildren  fromProps="fromProps" :bookname='bookname'></GrandChildren>
  </div>
</template>

<script>
import GrandChildren from "./GrandChildren";
export default {
  components: {
    GrandChildren,
  },
  data() {
    return {
      bookname: '大秦帝国'
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
