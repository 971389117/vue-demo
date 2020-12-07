# 前端 & Vue

## 包管理工具

NPM,Yarn 没有区别，两者都是node的包管理工具

NPM是Node官方出品的包管理工具
Yarn由Facebook出品

```bash
npm install -g yarn # 全局安装yarn

npm  list --depth=0
yarn list --depth=0

# 配置镜像
npm config get registry #获取当前配置的镜像
npm config set registry https://registry.npm.taobao.org # 设置淘宝镜像
npm config set registry  https://registry.npmjs.org/ # 设置回默认镜像

yarn config get registry
yarn config set registry https://registry.npm.taobao.org
yarn config set registry https://registry.yarnpkg.com

# 包的安装卸载
npm install 包名  # 添加运行依赖
npm install 包名 -D # 添加开发依赖
npm uninstall 包名 # 删除依赖

yarn add 包名
yarn add 包名 [--dev]
yarn remove 包名

# 运行脚本
npm run 脚本名
npm run serve
yarn 脚本名
yarn serve

npm install -g @vue/cli # 安装vue脚手架
yarn global add @vue/cli # 安装vue脚手架
```

serve 运行开发环境
build 打包

> 不要Yarn和NPM混用，容易出问题

## Vue语法

### 模板字符串

```js
// 表达式1
{{3+3}}
{{ 'hello'.split('').reverse().join('') }}
{{flag1===flag2?'验证成功，欢迎':'我不认识你'}}
// 表达式2
<a title="title" :id="aID + 3" href="#">v-bind</a>

// 变量从哪里来？：data、computed、props、inject
{{varName}}
```

#### 从哪来

```js
data(){
    return {
    bookName:"",
    authorList:[],
    book:{},
}}
```

> 所有当前组件用到的响应式数据都要先行在这里申明（初始化）

---

```js
computed:{
    fromComputed() {
    // 可以缓存函数的执行结果。只要依赖的响应式数据发生变化，就会执行。不变就不执行，
      this.fromData;
      this.say
      return "fromComputed";
    },
}

```

> 建议模板语法不要写复杂的表达式，采用命名良好的computed代替

---

```js
// 父级
<GrandChildren fromProps="fromProps"    ></GrandChildren>

// 子级
props: {
    say: String,
    fromProps: String,
},
```

### 生命周期

声明周期很多，只需要掌握两个

created:   data，methods等Vue数据已经可以使用,可以在这里做初始化
mounted:    挂载到页面之上,可以在这里做初始化

> 他俩执行之间进行了虚拟DOM的生成和DOM的渲染，时间差取决于dom的复杂度，但是通常这个时间很短，没什么区别

### 指令

```html
    <p v-html="html"></p>   <!-- 直接渲染html -->
    <p v-once>{{ once }}</p> <!-- 只渲染一次 -->
    <p v-show="show">{{ show }}</p> <!--show是false display:none -->
    <p v-if="if_">{{ if_ }}</p> <!-- if是false 标签不会渲染在页面上 -->
    <p v-else-if="ifelse_">{{ ifelse_ }}</p>
    <p v-else>{{ else_ }}</p>

    <h4>遍历数组</h4>
    <ul>
        <!--  -->
        <!-- ！！！key是必须的，唯一的 -->
      <li v-for="(item, index) of bookList" :key="item.ID">
        {{ index }} - {{ item.bookName }}
      </li>
    </ul>

    <h4>遍历对象 </h4>
    <ul>
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

    <!-- 过滤 -->
    <h4>bookListFilter</h4>
    <ul>
      <li v-for="book of bookListFilter" :key="book.ID">
        {{ book.bookName }}
      </li>
    </ul>
```

```js
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
```

> 不要把if和for写在一个标签上
> for循环必须写唯一的key
> key用基本类型，不要用对象

#### 数组

Vue的数组响应式不是全功能的

1.Vue封装了的函数
push("新成员"); // 末尾添加
unshift("左边新成员"); // 最左边添加
pop()   // 末尾删除
shift() // 最左边删除
splice() // 切片
sort()
reverse()  // 反转

2.重新赋值

>关于重新赋值：你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

### 事件

```html
<button @click="counter += 1">button 1 {{ counter }}</button>
<button @click="addOne">button 3 {{ counter }}</button>
<button @click="addOne(1, $event)">button 4 {{ counter }}</button>

```

```js
methods:{
    addOne(first, event) {
      this.counter++
    },
}
```

### 组件化

```html
<!-- 父组件 -->
<Card title='我是大明星'>
    <!-- <template #title>
        <div class="tal">我是小能手</div>
    </template>
    <template #right>
        <div class="lh bottom">
        购物车
        </div>
    </template> -->
</Card>


<!-- 子组件 -->
  <div class="p m bd bd-radius card">
    <slot name="thumb">
      <div class="thumb">
        <img
          width="100%"
          height="100%"
          src="http://img.wl.cn/s/961/8430961/8430961.jpg"
          alt=""
        />
      </div>
    </slot>
    <div class="flex-c flex-g">

      <slot name="title">
        <!-- 默认-占位元素 -->
        <div class="tal">{{title}}</div>
      </slot>
      <div class="flex flex-g flex-b">

        <slot name='left'>
           <div class="left flex-c-b">
          <div>作者：小明星</div>
          <div class="tal">$33.33</div>
          </div>
        </slot>

        <slot name='right'>
        </slot>
      </div>
    </div>
  </div>

<!-- js -->
props: {
    title:{
        type:String,
        default:'我们都一样年轻又彷徨'
    },
}
```

#### 组件通信

父子通信

```js
// 父
    <GrandSon @sendOk="onSendOk" :bookList="bookList"></GrandSon>

// 子
{
    props: {
        bookList: {
            type: Array,
        },
    },
    methods:{
        onClick(){
            this.$emit('sendOk','我的数据没问题')
        }
    }
}
```

爷孙通信

```js
// 需要中转
v-bind='$attrs'

v-on="$listeners"
```

兄弟通信 - 通过父亲转发

```js
// brother1
this.$parent.$on('foo', handle)
//brother2
this.$parent.$emit('foo')
```

祖先通信/爷孙通信

1. provide/inject

    ```js
    // ancestor
    provide() {
        return {foo: 'foo'}
    }
    // descendant
    inject: ['foo']
    ```

2. EventBus

    ```js
    // bus.js
    import Vue from 'vue';
    export default new Vue()

    // A
    import Bus from '@/utils/bus';
        // 监听自定义事件 gp
        Bus.$on('gp',(value)=>{console.log(value)})

    // B
    import Bus from '@/utils/bus';
        // 发出自定义事件 gp
        Bus.$emit('gp','来自爷爷的问候')

    ```

3. 状态管理 Vuex

```js
// store/index.js
export default new Vuex.Store({
  state: {
    token:''
  },
  mutations: {
    setToken(state,value){
      state.token=value
    }
  },
})

// 组件里
this.$store.state.token //取值
this.$store.commit('setToken','Vuex设置数据') // 设置数据
```

Vuex数据持久化

```js
  token:JSON.parse(token)

  setToken(state,value){
      state.token=JSON.stringify(token,value)
    }
```

#### 自定义双向绑定

```js
// 父
<Son v-model="value" ></Son>

// 子
<div>
    <input
    v-bind:value='value' @input="$emit('click',$event.target.value)" type="text" >
</div>

model: {
    // prop: "bookname",
    // event:"click"
}
props: {
    value: {
        type: [Number,String],
    },
},
```

### Vue-Router

安装
`vue add router`

```html
<nav>
    <router-link to="/">首页</router-link>
    <router-link to="/about">管理</router-link>
    <router-link to="/about?name=4">管理</router-link>
    <router-link :to="{name:'about',params:{id:'1234'}}">管理</router-link>
    <router-link :to="{name:'about',params:{id:'1234'},query:{name:4}}">管理</router-link>
</nav>
<router-view></router-view>
```

#### 路由匹配规则

```js
// /user/32131
{ path: '/',name:'index', component: Index}

// 动态路径
{ path: '/user/:id',name:'user', component: User}

// 动态可选路径
// /user/32112/ 或 /user/32112/hello
{ path: '/user/:id/:username?',name:"about" component: User}

// 传入多个参数
// <router-link :to="{name:'about',params:{id:'1234',name:'xiaoli',page:1}}">管理</router-link>
{ path: '/user',name:"about" , props:true component: User}

// 匹配全部路径
{ path: '*',name:"P404" component: P404}

// 在js中怎么导航

    // 添加一条路由
    this.$router.push('/about')
    this.$router.push({name:'about',params:{id:'1234'}})

    // 替换当前路由
    this.$router.replace({name:'about',params:{id:'1234'}})

    // 前进后退
    this.$router.go(-1) // 后退1步

    // 获取当前页面路由属性
    this.$route.params.id //获取动态路径
    this.$route.query.name //获取查询字符串
    this.$route.name  // 当前路由名字
    this.$route.path  // 当前路径
```
