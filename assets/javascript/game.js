var numWins = 0;
var numLosses = 0;

var targetPoints = 0;
var playerPoints = 0;

$(document).ready(function(){
	var resetGame= function() {
		playerPoints = 0;
		$("#playerPoints").text(playerPoints);
		targetPoints = Math.floor(Math.random()*120)+20;
		$("#targetPoints").text(targetPoints);
		$(".crystal").each(function(){
			$(this).attr("pointValue", Math.floor(Math.random()*12)+1);
		})

	}

	$(".crystal").on("click",function(){
		var thisCrystalPoint = $(this).attr("pointValue");
		thisCrystalPoint = parseInt(thisCrystalPoint);
		playerPoints += thisCrystalPoint;
		$("#playerPoints").html(playerPoints);
		console.log("thisCrystalPoint", thisCrystalPoint);
		console.log("playerPoints", playerPoints);

		// console.log($(this)[0][outerHTML]);
	})

	resetGame();
})





// var resetGame = function() {
// 	targetPoints = Math.floor(Math.random()*120) + 20;
// 	console.log("targetPoints", targetPoints);

// 	$(document).ready(function(){
// 		$("#ruby").attr("pointValue", 5);
// 		console.log($("#ruby")["pointValue"]);
// 	})

// 	// $("#ruby").attr("pointValue", "5");
// 	// console.log($("#ruby"));

// 	// $(".crystal").forEach(function(crystal) {

// 		// crystal.attr("crystalValue",Math.floor(Math.random()*12) + 1);
// 		// control.log()
// 	}
// // };

// resetGame();

// $(".crystal").on("click", function() {
// 	playerPoints += this.value;
// })




	// $(document).ready(function(){
	// 	$("button").click(function(){
	// 		$("#ruby").attr("pointValue", "ruby");
	// 		// $("#ruby").val("ruby");
	// 	});
			
	// });