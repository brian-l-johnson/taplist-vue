import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BeerList from './BeerList.vue'
import AddBeer from './AddBeer.vue'
import TapList from './TapList.vue'
import EditTapList from './EditTapList.vue'


Vue.use(VueRouter)
Vue.use(VueResource)


const routes = [
	{path: '/beerlist', component: BeerList},
	{path: '/addbeer', component: AddBeer},
	{path: '/taplist', component: TapList},
	{path: '/edittaplist', component: EditTapList}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	router
}).$mount('#app')
