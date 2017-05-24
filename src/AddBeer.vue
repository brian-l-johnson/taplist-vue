<template>

<div class="container">
	<div id="alert_placeholder">{{beer.title}}</div>
	<form class="form-horizontal" role="form">
		<div if="form-group">
			<label class="control-label" for="title">Title:</label>
			<input type="text" class="form-control" id="title" v-model="beer.title">
		</div>
		<div if="form-group">
			<label class="control-label" for="style">Style:</label>
			<input type="text" class="form-control" id="style" v-model="beer.style">
		</div>

	</form>
</div>
</template>

<script>

	export default {
	data() {
		return {
			beer : {'title': '', 'style': ''}
		}
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