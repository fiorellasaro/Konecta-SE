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
  installComponents: true
 

})
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase';
import moment from 'moment';

Vue.prototype.moment = moment
Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB5Ap0VYAT3-rkIxVGu9eBp6oEf9VJZyas",
  authDomain: "konectase-desa.firebaseapp.com",
  databaseURL: "https://konectase-desa.firebaseio.com",
  projectId: "konectase-desa",
  storageBucket: "konectase-desa.appspot.com",
  messagingSenderId: "962491687547",
  appId: "1:962491687547:web:a0fcbee16feb4ad0a9b8de",
  measurementId: "G-ZWE6D4HTXB"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
