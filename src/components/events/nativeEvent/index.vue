<template>
    <div>
        <Son @click='onClick'></Son>
        <Son @click.native='onClick'></Son>
    </div>
</template>

<script>
import Son from './Son';
    export default {
        name:"NativeEvent",
        components: {
            Son
        },
        methods: {
            onClick(){
                alert('test')
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>
