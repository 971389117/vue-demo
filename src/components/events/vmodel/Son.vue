<template>
    <div>
        <input
        v-bind:value='value' @input="$emit('input',$event.target.value)" type="text" >
    </div>
</template>

<script>
    export default {
        // model: {
        //     prop: ,
        //     event:
        // }
        props: {
            value: {
                type: [Number,String],
            },
        },

    }
</script>

<style lang="scss" scoped>

</style>
