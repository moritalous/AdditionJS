var aaa, bbb, ccc;

document.addEventListener("DOMContentLoaded", function (eve) {
  var sendBtn = document.getElementById("send");
  sendBtn.addEventListener("click", function (eve) {
    var contents = document.getElementById("contents");
    num = parseInt(contents.value);

    if (!isNaN(num)) {
      answer(num);
      if (num == ccc) {
        question("せいかい");
      } else {
        question("ちがいます");
      }
      contents.value = "";
      nextQuestion();
      question(aaa + "+" + bbb + "は？");
      scrollEnd();
    }

  }, false);

  nextQuestion();
  question(aaa + "+" + bbb + "は？");

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

function question(message) {
  var element = document.createElement('p');
  element.className = "right";
  element.innerHTML = message;

  var talk = document.getElementById("talk");
  talk.appendChild(element);
}

function nextQuestion() {
  aaa = Math.floor(Math.random() * 21);
  bbb = Math.floor(Math.random() * 11);
  ccc = aaa + bbb;
}

function scrollEnd() {
  window.scrollTo(0, Number.MAX_VALUE);
}