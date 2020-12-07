<template>
    <div>
        <Parent @sendFar='onSendFar'></Parent>

        {{$store.state.token}}
    </div>
</template>

<script>
    import Parent from './Parent';
    export default {
        name:"ComponentCommunication",
        components: {
            Parent
        },
        provide(){
            return {
                fromProvideGrandParent:this.fromDataGrandParent
            }
        },
        data() {
            return {
                fromDataGrandParent:"fromDataGrandParent"
            }
        },
        methods: {
            onSendFar(){
                console.log('我来自重孙子')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
