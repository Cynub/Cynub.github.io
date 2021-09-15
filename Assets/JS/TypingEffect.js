var i = 0;
var j = 0;
var txt = 'Hello! '; /* The text */
var txt2 = 'My name is Isaac.';
var speed = 50; /* The speed/duration of the effect in milliseconds */

function Hello() {
  if (i < txt.length) {
    document.getElementById("introText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(Hello, speed);
  }
}


function Isaac() {
  if (j < txt2.length) {
    document.getElementById("introText").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(Isaac, speed);
  }
}

function unfade() {
  var op = 0.5;  // initial opacity
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      document.getElementById("introText").style.opacity = op;
      document.getElementById("introText").style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 90);
}

setTimeout(Hello, 600)
setTimeout(Isaac, 1500)
setTimeout(unfade, 1400)

