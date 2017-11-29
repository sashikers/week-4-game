var numWins = 0;
var numLosses = 0;

var targetPoints = 0;
var playerPoints = 0;

$(document).ready(function(){
	// this function sets up the basic stage 1 of gameplay
	var resetGame= function() {
		// resets the player points to 0
		playerPoints = 0;
		// displays the player points to DOM
		$("#playerPoints").text(playerPoints);
		// sets the target at random number from 1 to 120
		targetPoints = Math.floor(Math.random()*120)+20;
		// displays the target points to DOM
		$("#targetPoints").text(targetPoints);
		// assigns a random value to each crystal between 1 and 12
		$(".crystal").each(function(){
			$(this).attr("pointValue", Math.floor(Math.random()*12)+1);
		})

	}
	// this is the function that goes when a crystal is clicked
	$(".crystal").on("click",function(){
		// assigns the point value of the crystal to dummy variable
		var thisCrystalPoint = $(this).attr("pointValue"); // needs to be accessed through the attr(), not dot or []
		// makes sure the pointvalue is parsed as an integer
		thisCrystalPoint = parseInt(thisCrystalPoint);
		// adds the crystal value to the playerPoints
		playerPoints += thisCrystalPoint;
		// updates the player score in DOM
		$("#playerPoints").html(playerPoints);

		if (playerPoints === targetPoints) {
			console.log("you win!");
			numWins += 1;
			$("#numWins").text(numWins);
			$("#alerts").text("You win this round!!")
			resetGame();
			console.log("numWins", numWins);

		} else if (playerPoints > targetPoints) {
			console.log("You lose!");
			numLosses += 1;
			$("#numLosses").text(numLosses);
			$("#alerts").html("Ha ha ha ha ha ha ha ha ha ha<br>Try again");
			console.log("numLosses", numLosses);
			resetGame();
		} else {
			console.log("keep going!")
			$("#alerts").text("Keep going...");
		}

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