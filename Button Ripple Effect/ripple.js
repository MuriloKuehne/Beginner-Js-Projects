const btnElem = document.querySelector(".btn");

btnElem.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnElem.offsetLeft;
  const y = event.pagey - btnElem.offsetTop;

  btnElem.style.setProperty("--xPos", x + "px");
  btnElem.style.setProperty("--yPos", y + "px");
});

// y = -1 to 57
// x = -1 to 126
