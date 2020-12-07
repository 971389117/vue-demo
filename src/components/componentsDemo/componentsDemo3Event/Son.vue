<template>
  <div>
    <p>来自父亲的值：parentName -- {{ parentName }}</p>
    <p>来自父亲的值：parentValue -- {{ parentValue }}</p>

    <button @click="onSendParent">给父亲的信</button>
    <!-- <GrandSon @send-grand-parent="onSendGrandParent"></GrandSon> -->
    <GrandSon v-bind='$props' v-on='$listeners'></GrandSon>
    <!-- <GrandSon v-bind="{...$props,...$attrs}" v-on='$listeners'></GrandSon> -->

  </div>
</template>

<script>
import GrandSon from './GrandSon';
export default {
  name: "Son",
  components: {
      GrandSon
  },
  props: {
    // ！！！不要去试图改变props的值
    parentName: String,
    parentValue: {
      type: String,
      default: "laowang",
      required: true,
      // 校验,返回一个Boolean值，如果false说明传入的值不正确就报错
      validator(value) {
        return ["me", "laowang", "parentValue",""].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      localParentName: this.parentName,
      sendParent: "给父亲的信",
    };
  },
  mounted () {
      console.log(this.$listeners,this.$attrs)
  },
  methods: {
    // ！！！不要去试图改变props的值
    updateParentName() {
      this.localParentName = "更新ParentName";
    },
    onSendParent() {
      console.log(this.$listeners)
      this.$emit("sendparent", this.sendParent);
    },
    onSendGrandParent(value){
      this.$emit('send-grand-parent',value+'by 儿子转发的孙子的信')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
