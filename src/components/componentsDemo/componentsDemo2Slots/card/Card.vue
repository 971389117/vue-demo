<template>
  <div class="p m bd bd-radius card">
    <slot name="thumb">
      <div class="thumb">
        <img
          width="100%"
          height="100%"
          src="http://img.wl.cn/s/961/8430961/8430961.jpg"
          alt=""
        />
      </div>
    </slot>
    <div class="flex-c flex-g">

      <slot name="title">
        <div class="tal">{{title}}</div>
      </slot>
      <div class="flex flex-g flex-b">

        <slot name='left'>
           <div class="left flex-c-b">
          <div>作者：小明星</div>
          <div class="tal">$33.33</div>
          </div>
        </slot>

        <slot name='right'>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title:{
            type:String,
            default:'我们都一样年轻又彷徨'
        },
    }
};
</script>
<style>
.p {
  padding: 10px;
}
.m {
  margin: 10px;
}
.bd {
  border: 1px solid #000;
}
.bd-radius {
  border-radius: 10px;
}
.flex {
  display: flex;
}
.flex-c{
        display: flex;
    flex-direction: column;
}
.flex-b{
    display: flex;
    justify-content: space-between;
}
.flex-c-b{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.flex-g{
    flex-grow: 1;
}
.tal{
    text-align: left;
}

</style>
<style lang="scss" scoped>

.card {
  display: flex;
}
.thumb {
  height: 120px;
  width: 120px;
}
.left{
    display: flex;
    flex-direction: column;
}

</style>
