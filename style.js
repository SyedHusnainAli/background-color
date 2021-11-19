// const colors = ["Red", "Green", "Blue", "Yallow"];

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();

//   document.body.style.backgroundColor = colors[randomNumber];
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }

const colorName = ["Yallow", "Green", "Pink", "Blue", "brown"];

const specialBtn = document.querySelector("#btn");

specialBtn.addEventListener("click", function () {
  const getNumber = values();
  document.body.style.backgroundColor = colorName[getNumber];
});

function values() {
  return Math.floor(Math.random() * colorName.length);
}
