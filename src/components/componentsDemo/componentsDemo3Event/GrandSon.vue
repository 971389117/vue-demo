<template>
  <div>
    <hr />
    <p>来自父亲的值：parentName -- {{ parentName }}</p>
    <p>来自父亲的值：parentValue -- {{ parentValue }}</p>
    <button @click="$emit('send-grand-parent', '给祖父的信')">
      给祖父的信
    </button>
    <button @click="onClick">
      给祖父的信
    </button>
  </div>
</template>

<script>
export default {
  props: {
    parentName: String,
    parentValue: String,
  },

  mounted() {
    // this.$emit('sendGrandParent',)
  },
  methods: {
      onClick() {
          this.$emit('send-grand-parent', '给祖父的信')
      }
  },
};
</script>

<style lang="scss" scoped>
</style>
