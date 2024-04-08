const next__btn = document.getElementById("next__btn");
const prev__btn = document.getElementById("prev__btn");
const img_box = document.getElementById("img_box");
const slider_img = document.createElement("img");
let i = 0;
let j = 0; // ilk sekilin yuklenmesi ucun yoxlama edir
let images = [];

//* 1-ci Yol
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.map((el) => {
      if (j == 0) {
        slider_img.src = el.image;
        ++j;
      }
      images.push(`${el.image}`);
    });
  });
slider_img.classList.add("slider-img");
img_box.append(slider_img);

//*  2-ci yol
// const request = async () => {
//   const response = await fetch("https://fakestoreapi.com/products");
//   const data = await response.json();
//   await data.map((el) => {
//     images.push(`${el.image}`);
//   });
//   slider_img.classList.add("slider-img");
//   slider_img.src = images[0];
//   img_box.append(slider_img);
// };
// request();

prev__btn.addEventListener("click", () => {
  if (i <= 0) i = images.length;
  i--;
  setImg();
});

next__btn.addEventListener("click", () => {
  if (i >= images.length - 1) i = -1;
  i++;
  setImg();
});

function setImg() {
  return slider_img.setAttribute("src", images[i]);
}
