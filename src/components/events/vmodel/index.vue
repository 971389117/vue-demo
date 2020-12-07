<template>
    <div>
        {{value}}
        <Son v-model="value" ></Son>
    </div>
</template>

<script>
import Son from './Son';
    export default {
        name:"VModel",
        components: {
            Son,
        },
        data() {
            return {
                value:0
            }
        },
        methods: {
            onInput(v) {
                console.log(v)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
