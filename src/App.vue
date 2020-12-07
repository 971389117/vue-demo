<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <!-- class绑定 -->
    <!-- <Mustache1></Mustache1> -->
    <!-- <Mustache2></Mustache2> -->
    <!-- <RequestDemo></RequestDemo> -->
    <!-- <LifeCycle></LifeCycle> -->

    <!-- <ComponentsDemo1></ComponentsDemo1> -->
    <!-- <Directive></Directive> -->
    <!-- <ArrayDemo></ArrayDemo> -->

    <!-- '@/components/events' -->
    <!-- <Events></Events> -->
    <!-- /events/FormDemo -->
    <!-- <FormDemo></FormDemo> -->

    <!-- @/components/componentsDemo/componentsDemo2Slots/card -->
    <!-- <ComponentCard></ComponentCard> -->


    <!-- @/components/events/vmodel -->
    <!-- <VModel></VModel> -->

    <!-- @/components/componentsDemo/componentsDemo3Event -->
    <!-- <ComponentsDemo3Event></ComponentsDemo3Event> -->
    <!-- @/components/componentsDemo/componentsDemo3Event/eventBus -->
    <!-- <EventBus></EventBus> -->

    <ComponentCommunication></ComponentCommunication>
  </div>
</template>

<script>
// import Mustache1 from './components/mustache/mustache1'
// import Mustache2 from './components/mustache/mustache2'

export default {
  name: "App",
  components: {
    // Mustache1,
    // Mustache2
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
