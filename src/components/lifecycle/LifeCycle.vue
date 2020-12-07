<template>
    <div>
        lifeCycle
        <hr>
        {{key}}
    </div>
</template>

<script>
    export default {
      name:"LifeCycle",
      data() {
          return {
              key: 'value'
          }
      },
         // 初始化
        beforeCreate () {
            // 实例初始化之后，数据观测之前
            console.log('beforeCreate');
        },

        // 常用
        created () {
            // data，methods已经可以使用
            // 可以在这里做初始化，请求数据
            console.log('create')
        },
        beforeMount () {
            // 挂载到页面之前
            console.log('beforeMount');
        },

        // 常用
        mounted () {
            // 挂载到页面之上
            // 可以在这里做初始化，请求数据
            console.log('mounted')
            this.key='key'
        },

        // 更新 比较少用
        beforeUpdate () {
            // 数据更改前
            console.log('beforeUpdate');
        },
        updated () {
            // 数据更改后
            console.log('updated')
        },

        // 销毁 很少用
        beforeDestroy () {
            console.log('beforeDestory');
        },
        destroyed () {
            console.log('destoryed')
        },
        methods: {

        }

        // 生命周期看起来很多，只需要掌握一个
    }
</script>

<style lang="scss" scoped>

</style>
