//Start page with button to start the game
	//

//Opens to new page with timer at the top

//Questions all listed in a row

//Done button on bottom to trigger next page wit totals

//4-5 option mutiple choices under the Q in form of radio button 

//If time runs out new, page shows with correct answers, incorrect answers, unanswered all listed respectively
  // wether or not all or answered or not.
$(document).ready(function(){
	$("#start-button").click(function(){

		var number = 60;
		alert("Let's Go!!!")

		$('#start-button').on('click', start)
		$('#submit').on('click', finish)
		$('#restart').on('click', restart)

		function start(){
			counter = setInterval(timer, 1000);
			showMe(".questions");
			showMe(".answers");
			showMe("#submit");
			hideMe("#start-button");
			hideMe(".rules");
		}
		function timer(){
			number--
			$("#show-number").html("<h2>" + number + "</h2>");
			if (number === 0){
				alert("Time... is... UP!")
				stop();
			}
		}
		function stop(){
			clearInterval(counter);

		}
		function finish(){
			clearInterval(counter);
		}
		function restart(){

		}

		start();
	});
});