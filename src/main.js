import Vue from 'vue'
import App from './App.vue'
import Mustache2 from '@/components/mustache/mustache2';
import Directive from '@/components/directive';
import ArrayDemo from '@/components/directive/ArrayDemo';
import Events from '@/components/events';
import FormDemo from '@/components/events/FormDemo';
import LifeCycle from '@/components/lifecycle/LifeCycle';
import ComponentsDemo1 from '@/components/componentsDemo/componentsDemo1';
import ComponentCard from '@/components/componentsDemo/componentsDemo2Slots/card';
import ComponentsDemo3Event from '@/components/componentsDemo/componentsDemo3Event';
import NativeEvent from '@/components/events/nativeEvent';
import EventBus from '@/components/componentsDemo/componentsDemo3Event/eventBus';
import ComponentCommunication from '@/components/ComponentCommunication/GrandParent';
import VModel from '@/components/events/vmodel';
import RequestDemo from '@/components/requests';
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component(Mustache2.name,Mustache2)
Vue.component(Directive.name,Directive)
Vue.component(ArrayDemo.name,ArrayDemo)
Vue.component(Events.name,Events)
Vue.component(FormDemo.name,FormDemo)
Vue.component(LifeCycle.name,LifeCycle)
Vue.component(ComponentsDemo3Event.name,ComponentsDemo3Event)
Vue.component(ComponentsDemo1.name,ComponentsDemo1)
Vue.component(ComponentCard.name,ComponentCard)
Vue.component(NativeEvent.name,NativeEvent)
Vue.component(EventBus.name,EventBus)
Vue.component(VModel.name,VModel)
Vue.component(RequestDemo.name,RequestDemo)
Vue.component(ComponentCommunication.name,ComponentCommunication)

// 为vue原型添加方法
Vue.prototype.$reverseText = function (propertyName) {
  this[propertyName] = this[propertyName]
    .split('')
    .reverse()
    .join('')
}

new Vue({
  data(){return {
    appName:"我是你们的祖先"
  }},

  router,
  store,
  render: h => h(App)
}).$mount('#app')
