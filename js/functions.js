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