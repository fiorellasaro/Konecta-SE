import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import firebase from 'firebase';
import moment from 'moment';

Vue.prototype.moment = moment
Vue.config.productionTip = false

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1PtbrxIC7pfT5Vy1R3MPAEyOCjuQa6B8",
  authDomain: "konectase-522d7.firebaseapp.com",
  databaseURL: "https://konectase-522d7.firebaseio.com",
  projectId: "konectase-522d7",
  storageBucket: "konectase-522d7.appspot.com",
  messagingSenderId: "1088807972190",
  appId: "1:1088807972190:web:f8a9f09e09e06a075973cf",
  measurementId: "G-ZGG15E1TFG"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
