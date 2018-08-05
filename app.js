
var counter = 0;
var feedMessage = "Num. of Hands is: ";
var dieContent = "!!";
var durTime = 2000;
var clrTranDuration = "1.25s";
var dieSides = 6;
var dieFirstVal = 0;
var dieLastVal = 6;
var dieCurrentVal = 0;
var modeRange = [0, 6];
var modeRangeActive = 'classic';
var soundFX = false;

var bgClArr = ['#ceaa08', '#efcb26', '#d3c067', '#f2d44b', '#fcd005', '#fcad05', '#c6901d', '#e8cb8f', '#fca376', '#e57740', '#ed84f4', '#bc46c4', '#d38078', '#ed6053', '#dd4d82', '#ff84b1', '#c6839c'];

// Initiate App
function buildApp() {
   document.getElementById("die").innerHTML = dieContent;
   document.getElementById("feed").innerHTML = feedMessage + "0";

   document.getElementById("choices").style.display = "none";
   document.getElementById("content").style.display = "none";
}

// create random background color
function randBG(elId) {
   var rNum = Math.floor(Math.random() * Math.floor(bgClArr.length)) + 1;
   document.getElementById(elId).style.transitionDuration = clrTranDuration;
   document.getElementById(elId).style.backgroundColor = bgClArr[rNum];
}


function randIt() {

   var min = modeRange[0];
   var max = modeRange[1];

   // random range (max inclusive)
   min = Math.ceil(min);
   max = Math.floor(max);
   dieCurrentVal = Math.floor(Math.random() * (max - min + 1)) + min; 

   console.log("min, max: " + min +" , " + max);

   document.getElementById("die").innerHTML = dieCurrentVal;
   console.log("randoming! " + dieCurrentVal);
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

function tgglDiv() {
   var classNameVal = document.getElementById("content").className;
   console.log("current className: " + classNameVal);
   var i, j;

   if (classNameVal === "choosing") {
      
      document.getElementById("choices").style.display = "none";
      document.getElementById("content").style.display = "block";
      document.getElementById("tggl-btn").style.display = "block";
      document.getElementById("tggl-btn").innerHTML = "Change Settings";
      
      
      document.getElementById("choices").className = "playing";
      document.getElementById("content").className = "playing";
      return;
   } else if (classNameVal === "playing") {
      
      document.getElementById("choices").style.display = "block";
      document.getElementById("content").style.display = "none";
      document.getElementById("tggl-btn").style.display = "none";

      document.getElementById("choices").className = "choosing";
      document.getElementById("content").className = "choosing";
      return;
   }

   console.log("no change made!")
   return;
}


function updatePlaySetting(expr) {
   console.log('modeRange: ' + modeRange + ' - ' + expr);
   document.getElementById("selectionInfo").innerHTML = 'Play Mode: ' + expr + ' - Range: ' + modeRange;
   tgglDiv();
   return;
}

function changeModeRange(expr) {

   switch (expr) {
     case 'classic':
       modeRange = [0, 6];
       modeRangeActive = expr;
       break;
       
       case 'classicDouble':
       modeRange = [0, 12];
       modeRangeActive = expr;
       break;
       
       case 'risky':
       modeRange = [-3, 6];
       modeRangeActive = expr;
       break;
       
       case 'riskyDouble':
       modeRange = [-6, 12];
       modeRangeActive = expr;
       break;
       
       default:
       modeRange = [0, 6];
       modeRangeActive = expr;
   }
   return updatePlaySetting(modeRangeActive);
}


// MAIN: Return Random Num for Die
function throwDie() {
   randIt();
   randBG("content");

   // Play Audio 
   if (soundFX) {
      document.getElementById("gameAudio").play();
   }

   // update feedback text
   counter++
   var feed = feedMessage + counter;
   document.getElementById("feed").innerHTML = feed;
   randBG("body");
}

function tgglAudio() {
   var v = document.getElementById('btn-soundFX').innerHTML;

   if (v === 'Turn ON Audio!') {
      document.getElementById('btn-soundFX').className = 'btn-soundFX-ON';
      document.getElementById('btn-soundFX').innerHTML = 'Turn OFF Audio!';
      soundFX = true;
      updatePlaySetting(modeRangeActive);
      return;
   } else if (v === 'Turn OFF Audio!') {
      document.getElementById('btn-soundFX').className = 'btn-soundFX-OFF';
      document.getElementById('btn-soundFX').innerHTML = 'Turn ON Audio!';
      soundFX = false;
      updatePlaySetting(modeRangeActive);
      return;
   }
   return;
}
