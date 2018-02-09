// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueResource from 'vue-resource'
import * as firebase from 'firebase'
import { store } from '../store'

import Vuetify from 'vuetify'

import App from './App'
import router from './router'

Vue.use(Vuetify)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCn7OzlBFYZ4AnNm6gwkknsM2lsQbJSQMA',
      authDomain: 'studentrecord-fea57.firebaseapp.com',
      databaseURL: 'https://studentrecord-fea57.firebaseio.com',
      projectId: 'studentrecord-fea57',
      storageBucket: 'studentrecord-fea57.appspot.com',
      messagingSenderId: '834302781351'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  template: '<App/>',
  components: {
    App
  }
})
