$(document).ready(function(){

	$(".question").hide();
	$(".answers").hide();
	$("#submit").hide();
	$("#restart").hide();
	$("#correct").hide();
	$("#wrong").hide();
	console.log($("#wrong"))

	var number = 15;
	var userGuessCorrect = 0;
	var userGuessWrong = 0;

	// var QandA = []

	$('#start-button').on('click', start)
	$('#submit').on('click', submit)
	$('#restart').on('click', restart)

		//Called when user clicks start
		function start(){
			counter = setInterval(timer, 1000);
			$("#start-button").hide();
			$(".rules").hide();
			$(".rules1").hide();
			$("#restart").hide();
			$(".question").show();
			$(".answers").show();
			$("#submit").show();
		}

		//Called when user clicks start
		function timer(){
			number--
			$("#show-number").html("<h2>" + number + "</h2>");
			if (number === 0){
				alert("Time... is... UP!")
				stop();
			}
		}

		//Called when timer runs out
		function stop(){
			clearInterval(counter);
			$("#show-number").hide();
			$(".question").hide();
			$(".answers").hide();
			$("#submit").hide();
			$("#restart").show();
			$("#correct").show();
			$("#wrong").show();
		}

		//Called when user clicks <submit>
		function submit(){
			clearInterval(counter);
			$("#show-number").hide();
			$(".question").hide();
			$(".answers").hide();
			$("#submit").hide();
			$("#restart").show();
			$("#correct").show();
			$("#wrong").show();	
			if (userTotal == compRandomNumber){
				yay();
			}
			else if (userTotal > compRandomNumber){
				loser();
			}

		}

		//Called when button id is clicked. Button shows up after time runs out 
		 //or when user clicks submit
		function restart(){
			$("#show-number").show();
			$("#correct").hide();
			$("#wrong").hide();
			$(".question").show();
			$(".answers").show();
			number =15;
			// userGuessCorrect = 0;
			// $('#correct').text(userGuessCorrect);
			// userGuessWrong = 0;
			// $('#wrong').text(userGuessWrong);
			start();
		}

		//click function for radio buttons
		//sets variables
		//then appends to score counter
		//I can't seem to get this to work right. It counts every click and somehow 
		 //shows the score counter on the start page even though its hidden on page load.



		$('#q1a').on('click', function (){
			$("#q2a").prop("checked", false);
			console.log("1976");
			correctCounter();
		})
		$('#q1b').on('click', function (){	
			$("#q1a").prop("checked", false);
			console.log("1980");
			wrongCounter();
		})

		function correctCounter(){
			userGuessCorrect++;
			$('#correct').html("Correct: " + userGuessCorrect);
		}
		function wrongCounter(){
			userGuessWrong++;
			$('#wrong').html("Wrong: " + userGuessWrong);
		}
	
});

//Start page with button to start the game
//Opens to new page with timer at the top
//Questions all listed in a row

//Done button on bottom to trigger next page with totals
//4-5 option mutiple choices under the Q in form of radio button 
//If time runs out new, page shows with correct answers, incorrect answers, 
  //unanswered all listed respectively
  // wether or not all or answered or not.