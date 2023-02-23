window.onload=function(){
   

    var boundarie=document.getElementsByClassName("boundary");
    reset();
    var status =document.getElementById("status").innerHTML;
    var score=0;
    var timer;
    var start = document.getElementById("start");
    win();
    mouseUp();
    

    var timer_element=document.getElementById("timer");

    function gameStart(){
       for(var i=0; i<boundarie.length; i++){
            boundarie[i].addEventListener("mouseenter",lose);
        
    }
    var ms=0;
    timer=setInterval(()=>{Element.innerHTML="timer 00:00:"+ms;ms++;},100);
}

    function lose(){
        for (var i=0;i<boundarie.length;i++){
            boundarie[i].classList.add("you_lost");
            document.getElementById("status").innerHTML="you lost";

    }
        score=score-10;
        document.getElementById("test").innerHTML="Score: "+score;
        clearInterval(timer);



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
    clearInterval(timer);


}
function mouseUp() {
    window.removeEventListener('mousemove', move, true);
}

function mouseDown(e) {
    window.addEventListener('mousemove', move, true);
}

function move(e) {
    start.style.top = e.clientY + 'px';
    start.style.left = e.clientX + 'px';
}

document.getElementById("start").addEventListener("mouseenter",gameStart);

}