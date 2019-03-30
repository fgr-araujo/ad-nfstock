import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'

import * as Firebase from 'firebase/app'
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyCdNCMFf2uC5fdRtp_WL2ar4x-bUUqW8Zw",
  authDomain: "nfstock-a388a.firebaseapp.com",
  databaseURL: "https://nfstock-a388a.firebaseio.com",
  projectId: "nfstock-a388a",
  storageBucket: "nfstock-a388a.appspot.com",
  messagingSenderId: "400940162578"
};
Firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
