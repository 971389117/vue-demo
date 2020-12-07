<template>
    <div>
        {{fromInject}}
        {{fromProps}}
        {{fromData}}
        {{fromComputed}}
    </div>
</template>

<script>
    export default {
        inject: ['fromInject'],
        props: {
            say:String,
            fromProps:String,
        },
        data() {
            return {
                fromData:"fromData"
            }
        },
        computed: {
            fromComputed(){
                this.fromData
                return 'fromComputed'
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>
