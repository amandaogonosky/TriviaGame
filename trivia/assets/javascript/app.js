

// this executes function on page load$
$(function() {
    console.log( "ready!" );
// ============== VARIABLES =============== //
    // console.log("working");
    var rights =0;
    var wrongs =0;
    var timeCounter = 6;
    var intervalId;
    // var runTime;

    // / =========== FUNCTIONS ============== //
        function reset(){
        var timeCounter =6;
        $("#timeDisplay").empty();
        $(userGuess).siblings().last().empty();
}

    $("#goButton").on("click",play);
    function play(){
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            function decrement(){
                timeCounter--;
            $("#timeDisplay").html("<p>" + timeCounter + "</p>");
                if (timeCounter === 0) {
                    timeUp();
                    results();                
                }

        }
    }
        function timeUp(){
            clearInterval(intervalId);
            timeCounter = 6;

            }

    function results(){
        $("#time-left").append("<div>Time is Up,Playah</div>");
        if (rights > 3)
        $("#time-left").append("<p>Ya Won!</p>");
        else{
            if(wrongs >0)
            $("#time-left").append("<p>Ya Lost!</p>");
        }

    }
   
// =========== EVENT LISTENERS ============ //

    // function gameOn(){
    $("button").on("click", function(){
    var userGuess =$(this);
    // if this button has a class ==> if true
    if(userGuess.is(".correct")){
        // console.log("yass");
        rights ++
        $(userGuess).siblings().last().text("Awesome!")
        $("#rights").text(" Yeah Dawg " +  rights);
        // we select the button (userGuess), .siblings()=>  select all html siblings, .last() => selets last element in .siblings() array  
    } 
    else if(userGuess.is(".incorrect")){
        // console.log('try again');
        wrongs ++
        $(userGuess).siblings().last().text("Did you watch TV in the 80's?");
        $("#wrongs").text(" Sorry Dawg " +  wrongs);
    }
    })
        reset();
})
    
        




