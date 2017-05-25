<template>
	<div class="row">
		<div class="col-md-5ths" style="text-align: center" v-for="tap in taplist">
			<h3>Tap: {{tap.tapId}}</h3><br/>
			Pressure: <input type="text" v-model="tap.pressure"><br/>
			Type: 
			<select v-model="tap.type">
				<option>CO2</option>
				<option>Nitro</option>
			</select><br/>
			Beer: 
			<select v-model="tap.beer">
				<option v-for="beer in beerlist" :value=beer._id>{{beer.title}}</option>
			</select><br/>
			<button v-on:click=updateTap(tap.tapId) :id=tap.tapId>Update</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			taplist : '',
			beerlist : ''
		}
	},
	
	created:function() {
		this.getBeerList();
		this.getTapList();
	},
	methods: {
		getTapList:function() {
			console.log("in getTapList");
			this.$http.get('http://127.0.0.1:3000/taplist')
				.then(response => {
					this.taplist = response.data;
					console.log("got: "+response.data);
				}
			)
			console.log("out of getTapList");
		},
		getBeerList:function() {
			console.log("in getBeerList");
			this.$http.get('http://127.0.0.1:3000/beers')
				.then(response => {
					this.beerlist = response.data;
					console.log("got: "+response.data);
				}
			)
			console.log("out of getBeerList");
		},
		updateTap:function(id) {
			this.$http.put('http://127.0.0.1:3000/taps/'+this.taplist[id-1]._id, this.taplist[id-1])
				.then(function(response) {
					console.log("got: "+response.data);
				})
				.catch(function(error){
					console.log("ERROR: "+error);
				});
		}
	}
	
}


</script>