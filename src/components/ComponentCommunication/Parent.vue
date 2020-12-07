<template>
    <div>
        <Son v-on='$listeners' @sendOk='onSendOk' @sendFar='onSendFar' name3='name3' name1="name1" name="name2"></Son>
    </div>
</template>

<script>
import Son from './Son';
    export default {
        components: {
            Son
        },
        methods: {
            onSendFar(str) {
                console.log(str)
            },
            onSendOk(){
                console.log('onSendOk')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
