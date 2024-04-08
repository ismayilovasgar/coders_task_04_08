const next__btn = document.getElementById("next__btn");
const prev__btn = document.getElementById("prev__btn");
const img_box = document.getElementById("img_box");
const slider_img = document.createElement("img");
let i = 0;
let images = [];

//* ilk YOl sadece ilk sekil gec yuklenir
// fetch("https://fakestoreapi.com/products?limit=10")
//   .then((res) => res.json())
//   .then((data) => {
//     data.map((el) => {
//       images.push(`${el.image}`);
//     });
//   });

const request = async () => {
  const response = await fetch("https://fakestoreapi.com/products?limit=10");
  const data = await response.json();
  data.map((el) => {
    images.push(`${el.image}`);
  });
  slider_img.classList.add("slider-img");
  slider_img.src = images[0];
  img_box.append(slider_img);
};
request();

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
  slider_img.setAttribute("src", images[i]);
  return "update";
}
