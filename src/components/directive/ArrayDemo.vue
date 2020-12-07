<template>
  <div>
      <h4>Vue包裹的方法</h4>
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>

    <h4>重新赋值</h4>
    <div v-for="item in items2" :key="item.id">
      {{ item }}
    </div>


    <h4>双重数组，过滤内部数组</h4>
    <div v-for="(set,index) in sets" :key='index'>
      <div v-for="n in even(set)" :key='n'>{{ n }}</div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArrayDemo",
  data() {
    return {
      items: [1, 2, 3, 4, 5],

      items2: [1, 2, 3, 4, 5],
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  mounted() {
    // this.items[0]=5 // 错的，不会触发响应式

    // vue包裹了的函数
    this.items.push("新成员"); // 右边添加
    this.items.unshift("左边新成员"); // 最左边添加
    // splice() // 切片
    // sort()
    // reverse()  // 反转

    // 也可以重新赋值
    this.items2 = this.items2.filter((item) => item > 3);
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0;
      });
    },
  },
};

// 关于重新赋值：你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。
</script>

<style lang="scss" scoped>
</style>
