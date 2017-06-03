<template>

<div class="container">
	<div id="alert_placeholder"></div>
	Edit beer :	
	<select v-model="beerid">
		<option v-for="beer in beerlist" :value=beer._id>{{beer.title}}</option>
	</select><br/>
	<div v-if=beerid>
		<form class="form-horizontal" role="form">
			<div if="form-group">
				<label class="control-label" for="title">Title:</label>
				<input type="text" class="form-control" id="title" v-model="beer.title">
			</div>
			<div if="form-group">
				<label class="control-label" for="style">Style:</label>
				<input type="text" class="form-control" id="style" v-model="beer.style">
			</div>
			<div if="form-group">
				<label class="control-label" for="style">Original Gravity:</label>
				<input type="text" class="form-control" id="og" v-model="beer.og">
			</div>
			<div if="form-group">
				<label class="control-label" for="style">International Bittering Units:</label>
				<input type="text" class="form-control" id="ibus" v-model="beer.ibus">
			</div>
			<div if="form-group">
				<label class="control-label" for="style">SRM:</label>
				<input type="text" class="form-control" id="srm" v-model="beer.srm">
			</div>
			<div if="form-group">
				<label class="control-label" for="style">Batch Size:</label>
				<input type="text" class="form-control" id="size" v-model="beer.batchSize">
			</div>
			<div if="form-group">
				<label class="control-label" for="style">Created On:</label>
				<input type="text" class="form-control" id="srm" v-model="beer.createdDate">
			</div>
			<button v-on:click="Update()">Edit Beer</button>

		</form>
	</div>
</div>
</template>

<script>

	export default {
	data() {
		return {
			beerlist : '',
			beerid: this.$route.params.beerid,
			beer : {'title': '', 'style': '', 'og': '', 'ibus': '', 'srm': '', 'createdDate': '', '_id': ''}
		}
	},
	created:function() {
		this.getBeerList();
		console.log("router params: "+this.$route.params.beerid)


	},
	watch : {
		beerid: function(val) {
			//this.$router.push({"beerid": val});
			this.$router.push('/editbeer/'+val);
			for(var i = 0; i < this.beerlist.length; i++) {
				if(val == this.beerlist[i]['_id']) {
					this.beer = this.beerlist[i];				
				}
			}
		}
	},

	methods: {
		Update:function() {
			console.log("here");
			console.log(this.beer);
			this.$http.put('http://127.0.0.1:3000/beers/'+this.beerid, this.beer)
				.then(function(response) {
					console.log("got: "+response.data);
					$('#alert_placeholder').append("<div class=\"alert alert-success\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>Beer "+this.beer.title+" updated</div>");
				})
			.catch(function(error) {
				console.log(error);
				$('#alert_placeholder').append("<div class=\"alert alert-danger\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>Failed to update "+this.beer.title+" </div>");

			});	

		},
		getBeerList:function() {
			console.log("in getBeerList");
			this.$http.get('http://127.0.0.1:3000/beers')
				.then(response => {
					this.beerlist = response.data;
					console.log("got: "+response.data);
					for(var i = 0; i < this.beerlist.length; i++) {
						console.log("on "+this.beerlist[i]);
						if(this.beerid == this.beerlist[i]['_id']) {
							this.beer = this.beerlist[i];
							console.log("found beer");				
						}
					}
				}
			)
		},
	}
	
}
</script>