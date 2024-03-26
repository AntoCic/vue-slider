const { createApp } = Vue

createApp({
    data() {
        return {
          count: 0
        }
      },
      methods: {
        increment() {
          this.count++
        }
      },
}).mount("#app");

const pathDirImg = [
  "./img/01.webp",
  "./img/02.webp",
  "./img/03.webp",
  "./img/04.webp",
  "./img/05.webp",
];
const img_carosello = document.getElementById("img_carosello");
const img_carosello_side = document.getElementById("img_carosello_side");
const bt_up = document.getElementById("bt_up");
const bt_down = document.getElementById("bt_down");

let indexCarosello = 0;

for (let index = 0; index < pathDirImg.length; index++) {
  const img = document.createElement("img");
  img.setAttribute("src", pathDirImg[index]);
  if (index == 0) {
    img.classList.add("ms_active");
  }
  img_carosello.appendChild(img);

  const img_boxDiv = document.createElement("div");
  img_boxDiv.classList.add("img_box");
  const img_side = img.cloneNode();
  const div = document.createElement("div");

  img_boxDiv.appendChild(img_side);
  img_boxDiv.appendChild(div);
  img_carosello_side.appendChild(img_boxDiv);
}

const imgElementList = document.querySelectorAll("#img_carosello img");
const imgSideElementList = document.querySelectorAll("#img_carosello_side img");
const divSideElementList = document.querySelectorAll(
  "#img_carosello_side .img_box div"
);

bt_up.addEventListener("click", function () {
  imgElementList[indexCarosello].classList.remove("ms_active");
  imgSideElementList[indexCarosello].classList.remove("ms_active");
  if (indexCarosello) {
    indexCarosello--;
  } else {
    indexCarosello = pathDirImg.length - 1;
  }
  console.log(indexCarosello);
  imgElementList[indexCarosello].classList.add("ms_active");
  imgSideElementList[indexCarosello].classList.add("ms_active");
});

bt_down.addEventListener("click", function () {
  imgElementList[indexCarosello].classList.remove("ms_active");
  imgSideElementList[indexCarosello].classList.remove("ms_active");
  indexCarosello++;
  if (indexCarosello == pathDirImg.length) {
    indexCarosello = 0;
  }
  console.log(indexCarosello);
  imgElementList[indexCarosello].classList.add("ms_active");
  imgSideElementList[indexCarosello].classList.add("ms_active");
});

for (let index = 0; index < divSideElementList.length; index++) {
  divSideElementList[index].addEventListener("click", function () {
    imgElementList[indexCarosello].classList.remove("ms_active");
    imgSideElementList[indexCarosello].classList.remove("ms_active");
    indexCarosello = index;
    console.log(index);
    imgElementList[indexCarosello].classList.add("ms_active");
    imgSideElementList[indexCarosello].classList.add("ms_active");
  });
}
