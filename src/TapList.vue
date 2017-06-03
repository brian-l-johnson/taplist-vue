<template>
	<div class="row">
		<div class="col-md-5ths" style="text-align: center" v-for="tap in taplist">
			<h3>{{tap.beer.title}}</h3><br/>
			<h4>Tap: {{tap.tapId}}</h4><br/>
			OG: {{tap.beer.og}}<br/>
			IBUs: {{tap.beer.ibus}}<br/>
			SRM: {{tap.beer.srm}}<br/>
			<div style="display:inline-block; position:relative">
            	<canvas :id="'glassCanvas-' + tap.tapId" width="160" height="275"></canvas>
                <img src="/images/glass.png" style="position:absolute; top:0px; left:0px; z-index:10">
            </div>
            <div :id="'fill-script-' + tap.tapId"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			taplist : ''
		}
	},
	
	created:function() {
		this.getBeerList();
		setInterval(function() {
			this.getBeerList();
		}.bind(this), 10000);
	},
	updated:function() {
		for (var i = 0; i<this.taplist.length; i++) {
			var tap = this.taplist[i];
			if(tap.beer.title != "Empty") {
				var batchSizeOz = tap.beer.batchSize *128;
				var percent = (batchSizeOz - tap.beer.dispencedAmount)/batchSizeOz;
				this.fillGlass(tap.tapId, tap.beer.srm, percent);
			}
		}
	},

	methods: {
		getBeerList:function() {
			console.log("in getBeerList");
			this.$http.get('http://127.0.0.1:3000/taplist/populated')
				.then(response => {
					this.taplist = response.data;
					console.log("got: "+response.data);
				}
			)
			console.log("out of getBeerList");
		},
		fillGlass:function(tap, srm, percent){
			console.log("fill glass "+tap);
			var top = 275-Math.round(275 * percent);
			var c = document.getElementById("glassCanvas-"+tap);
			var ctx = c.getContext("2d");
			ctx.clearRect(0,0,160,275);
			ctx.fillStyle=srmToRGB(srm);
			ctx.fillRect(0,top,160,275);
		}	
	}
	
}


</script>