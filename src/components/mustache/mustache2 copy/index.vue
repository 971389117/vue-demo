<template>
  <div>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {
    Child,
  },

  provide: {
    fromInject: "fromInject",
  },

  data() {
    return {

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
