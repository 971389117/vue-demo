<template>
  <div>
    <p>
      {{ fromInject }}
    </p>
    <p>
      {{ fromProps }}
      {{bookname}}
    </p>
    <p>
      {{ fromData }}
    </p>
    <p>
      {{ fromComputed }}
    </p>
  </div>
</template>

<script>
export default {
  inject: ["fromInject"],
  props: {
    bookname: String,
    fromProps: String,
  },
  data() {
    return {
      fromData: "fromData",
    };
  },
  computed: {
    fromComputed() {
      this.fromData;
      this.bookname
      return "fromComputed";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
