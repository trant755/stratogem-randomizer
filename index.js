// import all img file from img folder as array

const randomizer = document.querySelector(".randomizer");
const randomizerHendler = document.querySelector(".randomizer-hendler");
const stratogemList = document.querySelector(".stratogem-list");
const stratogemItem = document.querySelector(".stratogem-item");

const markup = (imgNumArr) =>
  imgNumArr.map(
    (imgNum) => `
<li class="stratogem-item">
    <img src="./img/${imgNum}.png" alt="stratogem" class="stratogem-item">
</li>`
  );

let stratogem = [];
randomizerHendler.addEventListener("click", () => {
  stratogemList.innerHTML = "";
  stratogem = [];
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 53) + 1;
    if (stratogem.includes(random)) {
      i--;
      continue;
    }
    stratogem.push(random);
  }

  const stratogemArr = markup(stratogem);

  stratogemList.innerHTML = stratogemArr.join("");
});
