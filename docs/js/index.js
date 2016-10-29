var aaa, bbb, ccc;
var q1 = 0,
  q2 = 0,
  q3 = 0;

document.addEventListener("DOMContentLoaded", function (eve) {
  var sendBtn = document.getElementById("send");
  var contents = document.getElementById("contents");

  contents.focus();

  contents.addEventListener("keypress", function (eve) {
    var key = eve.which || eve.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      sendBtn.click();
    }
  }, false);

  sendBtn.addEventListener("click", function (eve) {

    num = parseInt(contents.value);

    if (!isNaN(num)) {
      answer(num);
      if (num == ccc) {
        question("せいかい");
        q2++;
      } else {
        question("ちがいます");
        q3++;
      }
      contents.value = "";
      showRecord();
      nextQuestion();
      question("だい" + q1 + "もん：　" + aaa + "+" + bbb + "　は？");
      scrollEnd();
    }

    contents.focus();

  }, false);

  nextQuestion();
  question("だい" + q1 + "もん：　" + aaa + "+" + bbb + "　は？");

}, false);

function answer(message) {
  var element = document.createElement('p');
  element.className = "left";
  element.innerHTML = message;

  var talk = document.getElementById("talk");
  talk.appendChild(element);
}

function question(message) {
  var element = document.createElement('p');
  element.className = "right";
  element.innerHTML = message;

  var talk = document.getElementById("talk");
  talk.appendChild(element);
}

// function question(message) {
//   var element = document.createElement('p');
//   element.className = "right";
//   element.innerHTML = message;

//   var talk = document.getElementById("talk");
//   talk.appendChild(element);
// }

function nextQuestion() {
  aaa = Math.floor(Math.random() * 20);
  bbb = Math.floor(Math.random() * (20 - aaa));
  ccc = aaa + bbb;
  q1++;
}

function showRecord() {
  question(q1 + "もんちゅう " + q2 + "もん せいかい " + q3 + "もん まちがい");
}

function scrollEnd() {
  window.scrollTo(0, Number.MAX_VALUE);
}