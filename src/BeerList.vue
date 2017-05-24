<template>

<div>
This should be the beerlist:
<ul id="beerlist">
	<div v-for='beer in beerlist'>
		<h3>{{beer.title}}</h3>
		Style: {{beer.style}}<br/>
		OG: {{beer.og}}<BR/>
		IBUs: {{beer.ibus}}<BR/>
		SRM: {{beer.srm}}<BR/>
		Created on: {{beer.createdDate}}<br/>
	</div>
</ul>
</div>
</template>

<script>
export default {
	data() {
		return {
			beerlist : ''
		}
	},
	
	created:function() {
		this.getBeerList();
	},

	methods: {
		getBeerList:function() {
			console.log("in getBeerList");
			this.$http.get('http://127.0.0.1:3000/beers')
				.then(response => {
					this.beerlist = response.data;
					console.log("got: "+response.data);
				}
			)
			console.log("out of getBeerList");
			//.error((err)=> console.log(err))	
		}	
	}
	
}


</script>