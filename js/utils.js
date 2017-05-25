function fillGlass(percent, srm, tap) {
	var top = 275-Math.round(275 * percent);
	var c = document.getElementById("glassCanvas-"+tap);
	//var c = angular.element(document.querySelector('#glassCanvas-2'));
	var ctx = c.getContext("2d");
	ctx.clearRect(0,0,160,275);
	ctx.fillStyle=srmToRGB(srm);
	//console.log(srm);
	//console.log(srmToRGB(srm));
	ctx.fillRect(0,top,160,275);
}

function srmToRGB(srm) {
	switch(srm) {
		case 1 :
			return "#F3F993"
		case 2 :
			return "#F5F75C"
		case 3 :
			return "#F6F513"
		case 4 :
			return "#EAE615"
		case 5 :
			return "#E0D01B"
		case 6 :
			return "#D5BC26"
		case 7 :
			return "#CDAA37"
		case 8 :
			return "#C1963C"
		case 9 :
			return "#BE8C3A"
		case 10:
			return "#BE823A"
		case 11:
			return "#C17A37"
		case 12:
			return "#BF7138"
		case 13:
			return "#BC6733"
		case 14:
			return "#B26033"
		case 15:
			return "#A85839"
		case 16:
			return "#985336"
		case 17:
			return "#8D4C32"
		case 18:
			return "#7C452D"
		case 19:
			return "#6B3A1E"
		case 20:
			return "#5D341A"
		case 21:
			return "#4E2A0C"
		case 22:
			return "#4A2727"
		case 23:
			return "#361F1B"
		case 24:
			return "#261716"
		case 25:
			return "#231716"
		case 26:
			return "#19100F"
		case 27:
			return "#16100F"
		case 28:
			return "#120D0C"
		case 29:
			return "#100B0A"
		case 30:
			return "#050B0A"
		default:
			console.log("SRM must be a number");
			return "#ffffff"
			break;
	}
}