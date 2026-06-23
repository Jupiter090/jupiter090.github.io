const words = ["interesting", "useful", "weird", "different"];

const textBox = document.getElementById("typingAnim");

let indexOfLetter = 0;
let indexOfWord = 0;
var word = "";
var speed = 50;
var delayAfterFinishedAnim = 1000;

function typingAnimation() {
  word = words[indexOfWord];
  if (indexOfLetter > word.length) {
    setTimeout(deleteAnimation, delayAfterFinishedAnim);
    return;
  }

  textBox.innerHTML += word.charAt(indexOfLetter);
  indexOfLetter++;
  setTimeout(typingAnimation, speed);
}

function deleteAnimation() {
  if (indexOfLetter <= 0) {
    indexOfWord++;
    if (indexOfWord > words.length - 1) indexOfWord = 0;
    setTimeout(typingAnimation, delayAfterFinishedAnim);
    return;
  }

  textBox.innerHTML = textBox.innerHTML.slice(0, -1);
  indexOfLetter--;
  setTimeout(deleteAnimation, speed);
}