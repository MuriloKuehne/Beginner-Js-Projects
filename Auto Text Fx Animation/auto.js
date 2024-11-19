const containerElem = document.querySelector(".container");
const careers = ["Hooper", "Web Developer", "Gamer", "Student"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;

  containerElem.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
    0,
    characterIndex
  )}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(updateText, 400);
}
