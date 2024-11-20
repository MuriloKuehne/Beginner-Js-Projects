const textAreaElem = document.getElementById("textarea");
const totalCounter = document.querySelector(".total-counter");
const remainingCounter = document.querySelector(".remaining-counter");

const maxChars = 80;

textAreaElem.addEventListener("keyup", updateCounter);

function updateCounter() {
  const totalChars = textAreaElem.value.length;
  totalCounter.innerText = totalChars;
  remainingCounter.innerText = maxChars - totalChars;
}
