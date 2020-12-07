<template>
  <div>
    <!-- <slot>
          我是默认的slot
      </slot> -->

    <p>parentName -- {{ parentName }}</p>
    <p>parentValue -- {{ parentValue }}</p>

    <input type="text" />
    <button @click="onSendParent">onSendParent</button>
    <!-- <slot name='footer'></slot> -->

    <GrandSon></GrandSon>
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
    //不要去试图改变props的值
    parentName: String,
    parentValue: {
      type: String,
      default: "laowang",
      required: true,
      // 校验,返回一个Boolean值，如果false说明传入的值不正确就报错
      validator(value) {
        return ["me", "laowang", ""].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      localParentName: this.parentName,

      sendParent: "给父亲的信",
    };
  },
  methods: {
    updateParentName() {
      this.localParentName = "更新ParentName";
    },
    onSendParent() {
      this.$emit("sendparent", this.sendParent);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
