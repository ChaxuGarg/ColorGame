var t = new Array();
var count = 0;
var score = 0;
for(var i = 1; i < 7; i++){
    t[i] = document.getElementById(i);
}
var x;
var correctColor;

//function to get random colours
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//function to reset game 
function newGame() {
    count = 0;
    score = 0;
    document.getElementById("trial").textContent = "No. of tries: " + count;
    document.getElementById("score").textContent = "Score: " + score;
    
    for(var i = 1; i < 7; i++){
        t[i].style.background = getRandomColor();
        t[i].textContent = "";
    }
    
    x = Math.floor(Math.random() * 6 + 1);
    correctColor = t[x].style.background;
    document.getElementById("header-clue").innerHTML = correctColor;
}

//function to move to next round without losing score
function next(){
    for(var i = 1; i < 7; i++){
        t[i].style.background = getRandomColor();
        t[i].textContent = "";
    }

    x = Math.floor(Math.random() * 6 + 1);
    correctColor = t[x].style.background;
    document.getElementById("header-clue").innerHTML = correctColor;
}

//event listeneres for tiles
t[1].addEventListener("click", function(){
    if(t[1].style.background == correctColor){
        for(var j = 1; j < 7; j++){
            t[j].style.background = correctColor;
            t[j].textContent = "Click on next to continue!";
        }
        
        score += 1;
        document.getElementById("header").style.background = correctColor;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        t[1].style.background = "black";
        count += 1;
        document.getElementById("trial").textContent = "No. of tries: " + count;
    }
});

t[2].addEventListener("click", function(){
    if(t[2].style.background == correctColor){
        for(var j = 1; j < 7; j++){
            t[j].style.background = correctColor;
            t[j].textContent = "Click on next to continue!";
        }
        
        score += 1;
        document.getElementById("header").style.background = correctColor;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        t[2].style.background = "black";
        count += 1;
        document.getElementById("trial").textContent = "No. of tries: " + count;
    }
});

t[3].addEventListener("click", function(){
    if(t[3].style.background == correctColor){
        for(var j = 1; j < 7; j++){
            t[j].style.background = correctColor;
            t[j].textContent = "Click on next to continue!";
        }
        
        score += 1;
        document.getElementById("header").style.background = correctColor;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        t[3].style.background = "black";
        count += 1;
        document.getElementById("trial").textContent = "No. of tries: " + count;
    }
});

t[4].addEventListener("click", function(){
    if(t[4].style.background == correctColor){
        for(var j = 1; j < 7; j++){
            t[j].style.background = correctColor;
            t[j].textContent = "Click on next to continue!";
        }
        
        score += 1;
        document.getElementById("header").style.background = correctColor;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        t[4].style.background = "black";
        count += 1;
        document.getElementById("trial").textContent = "No. of tries: " + count;
    }
});

t[5].addEventListener("click", function(){
    if(t[5].style.background == correctColor){
        for(var j = 1; j < 7; j++){
            t[j].style.background = correctColor;
            t[j].textContent = "Click on next to continue!";
        }
        
        score += 1;
        document.getElementById("header").style.background = correctColor;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        t[5].style.background = "black";
        count += 1;
        document.getElementById("trial").textContent = "No. of tries: " + count;
    }
});

t[6].addEventListener("click", function(){
    if(t[6].style.background == correctColor){
        for(var j = 1; j < 7; j++){
            t[j].style.background = correctColor;
            t[j].textContent = "Click on next to continue!";
        }
        
        score += 1;
        document.getElementById("header").style.background = correctColor;
        document.getElementById("score").textContent = "Score: " + score;
    } else {
        t[6].style.background = "black";
        count += 1;
        document.getElementById("trial").textContent = "No. of tries: " + count;
    }
});