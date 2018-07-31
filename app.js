
var counter = 0;
var feedMessage = "Num. of Hands is: ";
var dieContent = "!!";
var durTime = 2000;
var clrTranDuration = "1.25s";
var dieSides = 6;

var bgClArr = ['#ceaa08', '#efcb26', '#d3c067', '#f2d44b', '#fcd005', '#fcad05', '#c6901d', '#e8cb8f', '#fca376', '#e57740', '#ed84f4', '#bc46c4', '#d38078', '#ed6053', '#dd4d82', '#ff84b1', '#c6839c'];

function buildApp() {
   document.getElementById("die").innerHTML = dieContent;
   document.getElementById("feed").innerHTML = feedMessage + "0";
}

// create random background color
function randBG(elId) {
   var rNum = Math.floor(Math.random() * Math.floor(bgClArr.length)) + 1;
   document.getElementById(elId).style.transitionDuration = clrTranDuration;
   document.getElementById(elId).style.backgroundColor = bgClArr[rNum];
}


function randIt(max=dieSides) {
   console.log("max: " + max);
   // create randon-num for the die
   var die = Math.floor(Math.random() * Math.floor(max)) + 1;
   document.getElementById("die").innerHTML = die;
   console.log("randoming! " + die);
}


// MAIN: Return Random Num for Die
function throwDie() {
   randIt();
   randBG("content");

   // update feedback text
   counter++
   var feed = feedMessage + counter;
   document.getElementById("feed").innerHTML = feed;
   randBG("body");
}

// Counter Reset
function ctrReset() {
   if(counter){
      counter = 0;
      document.getElementById("feed").innerHTML = feedMessage + "0";
      document.getElementById("die").innerHTML = dieContent;
      randBG("content");
   }
}

// Counter Hint to Reset Hover Actions
function ctrResetHintIn() {
   if(counter) {
      document.getElementById("feed").innerHTML = "Click to Reset!";
   }
}
function ctrResetHintOut() {
   if(counter)
   document.getElementById("feed").innerHTML = feedMessage + counter;
}