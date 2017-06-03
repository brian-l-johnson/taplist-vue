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
		<button v-on:click="Create()">Create Beer</button>

	</form>
</div>
</template>

<script>

	export default {
	data() {
		return {
			beer : {'title': '', 'style': '', 'og': '', 'ibus': '', 'srm': '', 'createdDate': ''}
		}
	},
	

	methods: {
		Create:function() {
			console.log("here");
			console.log(this.beer);
			this.$http.post('http://127.0.0.1:3000/beers', this.beer)
				.then(function(response) {
					console.log("got: "+response.data);
					$('#alert_placeholder').append("<div class=\"alert alert-success\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>Beer "+this.beer.title+" created</div>");
				})
			.catch(function(error) {
				console.log(error);
				$('#alert_placeholder').append("<div class=\"alert alert-danger\" role=\"alert\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>Failed to create "+this.beer.title+" </div>");

			});	
		}
	}
	
}
</script>