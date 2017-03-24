import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/pages/App.vue';
import Pattern from './components/pages/pattern.vue';

Vue.use(VueRouter)

const routes = [{
	path: '/home',
	component: Home,
}, {
	path: '/pattern',
	component: Pattern,
}, {
	path: '/',
	redirect: '/home'
}]

const router = new VueRouter({
	routes
})

var vm = new Vue({
	el: '#app',
	router,
})