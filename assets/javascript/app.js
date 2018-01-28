$(document).ready(function(){

	$(".question").hide();
	$(".answers").hide();
	$("#submit").hide();
	$("#restart").hide();
	$("#correct").hide();
	$("#wrong").hide();

	$("#start-button").click(function(){
		alert("Let's Go!!!")

		var number = 4;
		var correct = 0;
		var wrong = 0;
		var q1 = false;

		$(".question").hide();
		$(".answer").hide();

		$('#start-button').on('click', start)
		$('#submit').on('click', finish)
		$('#restart').on('click', restart)

		//Called when user clicks start
		function start(){
			counter = setInterval(timer, 1000);
			$("#start-button").hide();
			$(".rules").hide();
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
			// $(".results").show();
			$("#show-number").hide();
			$(".question").hide();
			$(".answers").hide();
			$("#submit").hide();
			//
			$("#restart").show();
			$("#correct").show();
			$("#wrong").show();
		}

		//Called when user clicks <submit>
		function finish(){
			clearInterval(counter);
			// number = 0;
			$("#show-number").hide();
			$(".question").hide();
			$(".answers").hide();
			$("#submit").hide();
			//
			$("#restart").show();
			$("#correct").show();
			$("#wrong").show();
		}

		//Called when button id is clicked. button shows up after time runs out 
		 //or when user clicks submit
		function restart(){
			$("#show-number").show();
			$("#correct").hide();
			$("#wrong").hide();
			number =4;
			start();
		}

		start();
	});
});

//Start page with button to start the game
//Opens to new page with timer at the top
//Questions all listed in a row

//Done button on bottom to trigger next page with totals
//4-5 option mutiple choices under the Q in form of radio button 
//If time runs out new, page shows with correct answers, incorrect answers, unanswered all listed respectively
  // wether or not all or answered or not.