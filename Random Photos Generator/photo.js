const imgContElem = document.querySelector(".image-container");

const btnElem = document.querySelector(".btn");

btnElem.addEventListener("click", () => {
  imageNum = 4;
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < imageNum; index++) {
    const newImgElem = document.createElement("img");
    newImgElem.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imgContElem.appendChild(newImgElem);
  }
}
