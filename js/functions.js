

$(document).ready(function(){
/* global $  */
/* global _ */
/* global loacalStorage*/
var score = 0; 
var attempts = localStorage.getItem("quizAttempts"); //first use assigns value of zero 
//Event Listeners
//"Submit Quiz" button 
$("button").on("click", gradeQuiz);
//q5 images
$(".q5Choice").on("click", function(){$(".q5Choice").css("background-color", "");$(this).css("background-color", "rgb(255, 255, 0)");});

//functions
  displayQ4Choices();
  function displayQ4Choices()//display q4 choices
  {
      let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware", "Idaho"];
      q4ChoicesArray = _.shuffle(q4ChoicesArray);
      for(let i = 0 ; i < q4ChoicesArray.length; i++)
      {
          $('#q4Choices').append(`<input type="radio" name="q4" id="${q4ChoicesArray[i]}"value="${q4ChoicesArray[i]}"> <label for="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
      }
  }
function isFormValid()
{
    let isValid = true;
    if ($("#q1").val() == "") 
    {
        isValid = false;
        $("#validationFdbk").html("Question 1 was not answered");
    }
    return isValid;
}
function rightAnswer(index)//template for correct answers 
{
    $(`#q${index}Feedback`).html("Correct!");
    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
    $(`#q${index}Feedback`).html("<img src='img/checkmark.png'>");
    score += 20;
}
function rightAnswer2(index)//template for correct answers 
{
    $(`#q${index}Feedback`).html("Correct!");
    $(`#q${index}Feedback`).attr("class", "bg-success text-white");
    $(`#q${index}Feedback`).html("<img src='img/checkmark.png'>");
    score += 12.5;
}
function wrongAnswer(index)//template for wrong answers 
{
    $(`#q${index}Feedback`).html("Incorrect!");
    $(`#q${index}Feedback`).attr("class", "bg-warning text-white");
    $(`#q${index}Feedback`).html("<img src='img/xmark.png'>");
}


function gradeQuiz()
{

	$("#validationFdbk").html(""); //resets validation feedback and removed red line 

	 if (!isFormValid()) 
	 {   
	    return;
	 }
	  
	 attempts++;//increase attempt count
	 localStorage.setItem("quizAttempts", attempts); //passes the increased variable into stoarage

    //variables
    score = 0;
    let q1Response = $("#q1").val().toLowerCase();//user response stored here in lowercase
    let q2Response = $("#q2").val();
    let q4Response = $("input[name=q4]:checked").val();
    let q6Response = $("#q6").val().toLowerCase();//user response stored here in lowercase
    let q7Response = $("#q7").val();
    //Question ---------------------
    if(q1Response == "sacramento") 
    {rightAnswer(1);}
    else 
    {wrongAnswer(1);}
    //console.log(q2Response);
    //question 2--------------------
    if(q2Response == "mo")
    { rightAnswer(2);}
    else 
    {wrongAnswer(2);}//end question 2
    //Question 3--------------------
    if($("#Jefferson").is(":checked") && $("#Roosevelt").is(":checked") && $("#Jackson").is(":checked") && $("#Franklin").is(":checked"))
    {rightAnswer(3);}
    else
    {wrongAnswer(3);}//end question3 
    //Question 4
    if(q4Response == "Rhode Island")
    {rightAnswer(4);}
    else
    {wrongAnswer(4);}
    //question 5 
    if($("#seal2").css("background-color") == "rgb(225, 225, 0)")
    {rightAnswer(5);}
    else
    {wrongAnswer(5);}
    
    //question 6
    if(q6Response == "California Poppy") 
    {rightAnswer2(6);}
    else 
    {wrongAnswer(6);}
    //question 7
    if(q7Response == "ya")
    { rightAnswer2(7);}
    else 
    {wrongAnswer(7);}//end question 2
    //question 8
    if( $("#40").is(":checked"))
    {rightAnswer2(8);}
    else
    {wrongAnswer(8);}//end question3 
    
    if(score > 80)
    {
        $("#passFail").html(`You passed! `); 
    }
    if(score < 50)
    {
        $("#passFail").html(`You failed! `); 
    }

	$("#totalScore").html(`Total Score: ${score}`);    //string literal displays score w/ backticks or plus symbol         
    $("#attempts").html(`Total attempts: ${attempts}`);
    
} //gradeQuiz


//<input type="checkbox" id="Washington"><label for="Washington">Washington</label>
})//ready