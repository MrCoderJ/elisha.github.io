// ColorGame 
var numOfSquares = 6
var colors = generateRandomColor(numOfSquares);
// assign the color for the game 
var colorPicked = pickColor();
var resetButton = document.querySelector("#reset");
//getting the element of a div using the class name div
var squares = document.querySelectorAll(".square");
//getting the element of a h1 using it's id
var colorD = document.querySelector("#colorDisplay");
var h1 = document.querySelector("h1");
colorD.textContent = colorPicked;
var bodyColor = document.querySelector("body");
//message to display if the color matches or not
var messageDisplay = document.querySelector("#message");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");

//controlling the call for change of color to specifi which level is selected in the hardbutton
hardButton.addEventListener("click", function(){
    numOfSquares = 6;
    colors = generateRandomColor(numOfSquares);
    colorPicked = pickColor();
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
});

//controlling the call for change of color to specifi which level is selected in the easybutton
easyButton.addEventListener("click", function(){
    numOfSquares = 3
    colors = generateRandomColor(numOfSquares);
    colorPicked = pickColor();
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#232323";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
});
resetButton.addEventListener("click", function(){
    // generate new colors according to the number passed as an argument to it.
    colors = generateRandomColor(numOfSquares);
    
    colorD.textContent = colorPicked;

    colorPicked = pickColor();
    for(var i= 0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
});
setUp();

function setUp(){
    for(var i = 0; i< colors.length; i++){
   squares[i].style.backgroundColor = colors[i];
   squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
       if (clickedColor === colorPicked) {
           //bodyColor.style.backgroundColor = colorPicked;   
        //this.style.backgroundColor = colorPicked
        messageDisplay.textContent = "Correct";
          changeColor(clickedColor); 
        h1.style.backgroundColor = colorPicked;
           resetButton.textContent = "Play Again"
       }else{
           // if the color does not match the color game turn the square to the body color
           this.style.backgroundColor = "#232323";
           // then display try again message
           messageDisplay.textContent = " Try Again";
       }
       
   });
}
}

// function to change the color all the squares to the color of the matched game
function changeColor(color){
    for(var i= 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColor(num){
    var arr = []
    for(var i= 0; i<num; i++){
        arr.push(randomColor());
    }
return arr;
}
function randomColor(){
   var r = Math.floor(Math.random() * 256);

   var g = Math.floor(Math.random() * 256);
   
   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b +  ")";
}