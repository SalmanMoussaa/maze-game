window.onload=function(){
   

    var boundarie=document.getElementsByClassName("boundary");
    var status =document.getElementById("status").innerHTML;
    var score=0;
    win();
    reset();
    
    var timer_element=document.getElementById("timer");

    function gameStart(){
       for(var i=0; i<boundarie.length; i++){
            boundarie[i].addEventListener("mouseenter",lose);
        
    }
    startTimer();
    reset()
   
}

    function lose(){
        for (var i=0;i<boundarie.length;i++){
            boundarie[i].classList.add("you_lost");
            document.getElementById("status").innerHTML="you lost";
            

    }
        score-=10;
        document.getElementById("score").innerHTML="Score: ",score;
        stopTimer();



}       
    function reset_colors(){
        for(var i=0;i<boundarie.length;i++){
            boundarie[i].classList.remove("you_lost");
            document.getElementById("status").innerHTML=status;
    }}

    function reset(){
        document.getElementById("start").addEventListener("mouseenter",reset_colors);
        
        
        
    }
    
function win(){
    document.getElementById("end").addEventListener("mouseenter",won);
}
     


function won(){
    document.getElementById("status").innerHTML="you won!";
    score+=5;
    document.getElementById("score").innerHTML="Score: "+score;
    reset()
    stopTimer();


}
var start_time
function startTimer() {
    start_time = Date.now();
    var interval = setInterval(function() {
        var elapsedTime = Date.now() -  start_time;
        timer_element.innerHTML = "Live: " + (elapsedTime / 1000).toFixed(3);
    }, 100);
}
function stopTimer(){
    clearInterval(interval);
    timer_element.innerHTML = "Live: 0.0";
}




document.getElementById("start").addEventListener("mouseenter",gameStart);

}