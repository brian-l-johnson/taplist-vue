import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BeerList from './BeerList.vue'
import AddBeer from './AddBeer.vue'
import TapList from './TapList.vue'


Vue.use(VueRouter)
Vue.use(VueResource)


const routes = [
	{path: '/beerlist', component: BeerList},
	{path: '/addbeer', component: AddBeer},
	{path: '/taplist', component: TapList}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	router
}).$mount('#app')
