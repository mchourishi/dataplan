import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'bootstrap-slider/dist/css/bootstrap-slider.css';
import 'bootstrap-slider/dist/bootstrap-slider';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
