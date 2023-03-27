const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxSize = 30;
  const newBoxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box);
    boxSize += 10;
  }
  boxes.append(...newBoxes);
};

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createButton.addEventListener("click", () => {
  const amount = parseInt(controls.querySelector("input").value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
