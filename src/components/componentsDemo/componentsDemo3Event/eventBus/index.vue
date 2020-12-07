<template>
    <div>
        <button @click='onClick'>爷爷发送</button>
        <Son></Son>
    </div>
</template>

<script>
import Bus from '@/utils/bus';
import Son from './Son';
    export default {
        name:"EventBus",
        components: {
            Son
        },
        mounted () {
                Bus.$on('gs',(value)=>{console.log(value)})
            },
            methods: {
                onClick() {
                    Bus.$emit('gp','来自爷爷的问候')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
