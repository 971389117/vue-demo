<template>
    <div>
        <Card title='我是大明星'>
            <template #title>
                <div class="tal">
                    我是小能手</div>
            </template>
            <!-- <template #right>
                <div class="lh bottom">
                购物车
                </div>
            </template> -->
        </Card>
    </div>
</template>

<script>
import Card from './Card';
    export default {
        name:'ComponentCard',
        components: {
            Card
        }
    }
</script>

<style lang="scss" scoped>

.lh{
}
.bottom{
    margin-top:auto;
}
</style>
