<template>
    <div>
        <p @click='onClick'>
            {{bookList}}
        </p>
        <p>
            {{fromProvideGrandParent}}
        </p>
        <p>
            {{$attrs}}
        </p>
    </div>
</template>

<script>
    export default {
        inject: ['fromProvideGrandParent'],
        props: {
            bookList: {
                type: Array,
            },
        },
        methods: {
            onClick(){
                this.$emit('sendOk','我的数据没问题')

                this.$emit("sendFar",'送的比较远')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
