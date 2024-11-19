const inputElem = document.querySelector(".input");
const labelElem = document.querySelector(".label");

inputElem.checked = JSON.parse(localStorage.getItem("mode"));

inputElem.checked = false;
updateBodyElem();

function updateBodyElem() {
  if (inputElem.checked) {
    bodyElem.style.background = "black";
  } else {
    bodyElem.style.background = "white";
  }

  function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputElem.checked));
  }

  inputElem.addEventListener("input", () => {
    updateBodyElem();
    updateLocalStorage();
  });
}
