import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDsa4eEQ6WlPIObaddjAa7qAGKRi9NuYKY',
    libraries: 'places',
  },
 

})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
