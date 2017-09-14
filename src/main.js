// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueLazyload)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.config.errorHandler = function (err, vm) {
    var componentName = Vue.util.formatComponentName(vm),
        propsData = vm.$options.propsData;
    fundebug.notifyError(err, {
        metaData: {
            componentName: componentName,
            propsData: propsData
    }});
}
