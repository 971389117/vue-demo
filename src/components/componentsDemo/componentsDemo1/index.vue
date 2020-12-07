<template>
    <div>
        我是爷爷，我来了
        <hr>
            <Son></Son>
        <hr>
        我是爷爷，我走了
    </div>
</template>

<script>
import Son from './Son';
    export default {
        name:'ComponentsDemo1',
        components: {
            Son
        }
    }
</script>

<style lang="scss" scoped>

</style>
