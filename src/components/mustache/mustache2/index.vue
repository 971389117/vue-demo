<template>
  <div>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  name:"Mustache2",
  components: {
    Child,
  },

  provide: {
    fromInject: "fromInject",
  },


};
</script>

<style lang="scss" scoped>
</style>
