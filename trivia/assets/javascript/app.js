

// this executes function on page load$
$(function() {
    console.log( "ready!" );

// ============== VARIABLES =============== //
    // console.log("working");
    var rights =0;
    var wrongs =0;
    var timeCounter =5;
    var intervalId;
    // var runTime;

    // =========== FUNCTIONS ============== //
    //
        function play(){
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

function decrement(){
    // decrease my timecouter from 15 by   1
    timeCounter--;
    // show the number in timedisplay tage
$("#timeDislplay").html("<h2>" + number + "</h2>");
    if (timeCounter === 0) {
        // run time up function
        timeUp();

         
    }
}
    function results(){
        if (timeCounter === 0)
        $("#time-left").append("<p>Time is Up,Playa</p>");

        if (rights === 4)
        $("#time-left").append("<p>Winner</p>");
        else{
            if(wrongs >0)
            $("#time-left").append("<p>Loser</p>");
        }


    }

    function timeUp(){
        clearInterval(intervalId);
            // $("#time-left").append("<p>Time is Up,Playa</p>");
                // console.log("time")
        }
// =========== EVENT LISTENERS ============ //
    // invoke startgame function on page load
    // startGame()
    $("#goButton").on("click", play);

    $("button").on("click", function(){
        // timer runs
    var userGuess =$(this);
    // if this button has a class ==> if true
    if(userGuess.attr("class")){
        console.log("yass");
        rights ++
        $(userGuess).siblings().last().text("Awesome!")
        $("#rights").text(" Yeah Dawg " +  rights);
        // we select the button (userGuess), .siblings()=>  select all html siblings, .last() => selets last element in .siblings() array  
    } 
    else {
        console.log('try again');
        wrongs ++
        $(userGuess).siblings().last().text("Did you watch TV in the 80's?");
        $("#wrongs").text(" Sorry Dawg " +  wrongs);
    }

    play();
})
})

