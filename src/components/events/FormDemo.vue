<template>
  <div>
    <!-- 输入框 -->
    <p>
      <input type="text" v-model="textValue" />
      {{textValue}}
    </p>

<!-- 多行文本框 -->
    <p>
      <textarea v-model="textAareValue"></textarea>
      {{textAareValue}}
    </p>

    <p>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </p>

    <!-- 复选框 -->
    <p>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames" />
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
      <label for="mike">Mike</label>
      <br />
      <span>Checked names: {{ checkedNames }}</span>
    </p>

    <!-- 单选框 -->
    <p id="example-4">
      <input type="radio" id="one" value="One" v-model="picked" />
      <label for="one">One</label>
      <br />
      <input type="radio" id="two" value="Two" v-model="picked" />
      <label for="two">Two</label>
      <br />
      <span>Picked: {{ picked }}</span>
    </p>

    <!-- 下拉选择 -->
    <p id="example-5">
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "FormDemo",
  data() {
    return {
      textValue: "我是text",
      textAareValue: "我是textAare",
      checked: true,
      checkedNames: [],
      picked: "",
      selected: "",
    };
  },
  methods: {
    onSubmit() {
      this.textValue;
    },
  },
};

// v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
</script>

<style lang="scss" scoped>
</style>
