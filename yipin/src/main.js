import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

const router = new VueRouter({
})

var vm = new Vue({
	el: '#app',
	render: h => h(App),
})