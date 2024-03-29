<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>US Quiz</title>
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/jquery.min.js"></script>
  
  
  <script>
  /* global $  */

  	$(document).ready(function(){

      //Event Listeners
      //"Submit Quiz" button 
  		$("button").on("click", gradeQuiz);

  		function isFormValid(){
            let isValid = true;
            if ($("#q1").val() == "") {
                isValid = false;
                $("#validationFdbk").html("Question 1 was not answered");
            }
            return isValid;
        }

        function gradeQuiz(){

        	$("#validationFdbk").html(""); //resets validation feedback

        	 if (!isFormValid()) {   
        	    return;
        	  }

            //variables
            let score = 0;
            let q1Response = $("#q1").val().toLowerCase();

            //Question 1
            if(q1Response == "sacramento") {
                $("#q1Feedback").html("Correct!");
                $("#q1Feedback").attr("class", "bg-success text-white");
                $("#markImg1").html("<img src ='img/checkmark.png'>");
                score += 20;

            }else {
                $("#q1Feedback").html("Incorrect!");
                $("#q1Feedback").attr("class", "bg-warning text-white");
                $("#markImg1").html("<img src ='img/xmark.png' alt='xmark'>");
            }

        	$("#totalScore").html(`Total Score: ${score}`);            

        } //gradeQuiz

  	})//ready
  </script>

</head>
<body class="text-center">

	<h1 class="jumbotron"> US Geography Quiz </h1>

	<h3><span id="markImg1"></span> What is the capital of California?</h3>
	<input type="text" id="q1">
	<br><br>
	<div id="q1Feedback"></div>
	<br>

  <h3 id="validationFdbk" class="bg-danger text-white"></h3>
  <button class="btn btn-outline-success"> Submit Quiz </button>
  <br><br>

  <h2 id="totalScore" class="text-info"></h2>

</body>
</html>

