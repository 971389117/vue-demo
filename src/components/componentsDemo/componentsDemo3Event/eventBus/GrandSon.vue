<template>
    <div>
        <button @click='onClick'>孙子发送</button>
    </div>
</template>

<script>
import Bus from '@/utils/bus';

    export default {
        mounted () {
           Bus.$on('gp',(value)=>{
               console.log(value)
           }) ;

        },
        methods: {
            onClick(){
                Bus.$emit('gs','来自孙子的问候')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
