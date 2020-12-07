<template>
  <div>
      <!-- 直接渲染html -->
    <p v-html="html"></p>
    <!-- 只渲染一次 -->
    <p v-once>{{ once }}</p>
    <p>{{ once }}</p>

    <!--show是false display:none -->
    <p v-show="show">{{ show }}</p>

    <!-- if是false 标签不会渲染在页面上 -->
    <p v-if="if_">{{ if_ }}</p>
    <p v-else-if="ifelse_">{{ ifelse_ }}</p>
    <p v-else>{{ else_ }}</p>

    <hr>
    <h4>遍历数组</h4>
    <ul>
        <!-- ！！！key是必须的，唯一的 -->
      <li v-for="(item, index) of bookList" :key="item.ID">
        {{ index }} - {{ item.bookName }}
      </li>
    </ul>

    <h4>遍历对象 </h4>
    <ul>
      <!-- key用基本类型，不要用对象 -->
      <li v-for="(value, name, index) in book" :key="name">
        {{ index }} - {{ name }} - {{ value }}
      </li>
    </ul>

    <h4>遍历值</h4>
    <ul>
        <!--  -->
      <li v-for="n in 3" :key="n">{{ n }}</li>
    </ul>

    <!-- ！！!不要把if 和 for 写在一个标签上 -->
    <!-- <ul>
      <li v-for="item in bookList" v-if="item.ID===1" :key="item.ID">{{ item.bookName }}</li>
    </ul> -->

    <hr />
    <!-- 过滤 -->
    <h4>bookListFilter</h4>
    <ul>
      <li v-for="book of bookListFilter" :key="book.ID">
        {{ book.bookName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Directive",
  data() {
    return {
      html: `<span style='color:red'>我是html</span>`,
      once: "我是 v-once,我不会变",
      show: true,
      if_: "我是if",
      ifelse_: "我是if - else",
      else_: "我是else",

      bookList: [
        { bookName: "三体", ID: 1 },
        { bookName: "三国志", ID: 2 },
        { bookName: "JavaScript权威指南", ID: 3 },
      ],
      book: {
        ID: 1,
        bookName: "笑傲江湖",
        author: "金庸",
        type: "武侠小说",
      },
    };
  },
  computed: {
    bookListFilter() {
      return this.bookList.filter((book) => book.ID>=2);
    },
  },
  mounted() {
    setTimeout(() => {
      this.once = "我是once,我改变了";
      this.show = false;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
[v-cloak] {
  display: none;
}
</style>
