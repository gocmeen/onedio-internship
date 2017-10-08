var questions = [{question: 1, answer: "a", choices: [ 1,2,"a",4]},
				{question: 2, answer: "a", choices: [ 1,"a",3,4]},
				{question: 3, answer: "a", choices: [ 1,2,"a",4]},
				{question: 4, answer: "a", choices: [ 1,"a",3,4]},
				{question: 5, answer: "a", choices: [ 1,2,"a",4]},
				{question: 6, answer: "a", choices: [ 1,2,3,"a"]},
				{question: 7, answer: "a", choices: [ "a",2,3,4]},
				{question: 8, answer: "a", choices: [ 1,"a",3,4]},
				{question: 9, answer: "a", choices: [ 1,"a",3,4]},
				{question: 10, answer: "a", choices: [ "a",2,3,4]}];

var count = 0, score = 0, roundScore = 0;

document.getElementById("q").textContent = questions[count].question;
//document.getElementById("score-user1").textContent = score;
var array =document.getElementsByClassName("buttons");

//init buttons with first question choices
for(var n=0; n < questions[count].choices.length ;n++){
	array[n].textContent = questions[count].choices[n];
	console.log(questions[count].choices[n]);
}

//add listeners to buttons		
for(var i=0;i< array.length; i++){
		
	array[i].addEventListener("click", function(){
		
		if(this.textContent === questions[count].answer){
			console.log(true);
			score += roundScore;
			document.getElementById("score-user1").textContent = "Score: " + score;
		}
		else
			console.log(false);
		for(var n= 0; n< array.length; n++)
			array[n].disabled = true;
	}); 
}
var duration = 13;
roundScore = duration -2;

var x = setInterval(function(){
		
		//console.log("answer:" + questions[count].answer);
		roundScore -= 1;
		//go to next question if duration ended and questions still exist
	   if(duration === 0 && count !==10){
	   	
	   		//increment question count
	    	count++;
	    	//reset timer
	    	duration = 13;
	    	roundScore = duration -2;
	    	//init next question
	    	document.getElementById("q").textContent = questions[count].question;
	    	
	    	//enable buttons
	    	for(var n= 0; n< array.length; n++)
				array[n].disabled = false;
			
			//update choices and display to buttons	
			for(var n=1; n < questions[count].choices.length ;n++){
				array[n].textContent = questions[count].choices[n];
				console.log(questions[count].choices[n]);
			}
	    }
	    
	    //end the game if question count
	    else if (count===10){
	    	clearInterval(x);
	    	document.getElementById("countdown-number").textContent ="";
	    	window.location.href="/result";
	    	document.getElementById("result").textContent = "Your Score: " + score;
	    	return;
	    }
	    
	    //update duration if questions still exist
	    if(count <11){
			duration--;
	   		document.getElementById("countdown-number").textContent = duration;
	   		console.log(duration);
	   	}
	}, 1000);