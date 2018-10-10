// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAgile from 'vue-agile'
import App from './App'
import '@/assets/styles/app.scss'
import router from './router'

import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faDraftingCompass, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faFortAwesome } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueAgile)

Vue.use(VueFire)
firebase.initializeApp({
  apiKey: 'AIzaSyBC8XR9LhTGvKM8Cd5_nwLKtOteeN7ht9c',
  authDomain: 'msc-brainbase.firebaseapp.com',
  databaseURL: 'https://msc-brainbase.firebaseio.com',
  projectId: 'msc-brainbase',
  storageBucket: 'msc-brainbase.appspot.com',
  messagingSenderId: '27654187260'
})
export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

Vue.use(Buefy)

library.add(faDraftingCompass, faFacebookSquare, faLightbulb, faFileInvoiceDollar, faFortAwesome)
Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
