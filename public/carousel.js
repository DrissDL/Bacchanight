// Background

let backgroundImages = null;

function updateBackgroundImages() {
  backgroundImages = document.querySelectorAll(".background img");
  console.log("backgroundImages", backgroundImages);
}
const previousButtonBackground = document.getElementById(
  "previous-button-background",
);
const nextButtonBackground = document.getElementById("next-button-background");
const backgroundContainer = document.querySelector(".background");

console.log("back", backgroundImages);
let backgroundIndex = 0;

previousButtonBackground.addEventListener("click", () => {
  if (backgroundIndex > 0) {
    backgroundIndex -= 1;
  }

  updateBackground();
});

nextButtonBackground.addEventListener("click", () => {
  if (backgroundIndex < backgroundImages.length - 1) {
    backgroundIndex += 1;
  }

  updateBackground();
});

function updateBackground() {
  backgroundContainer.style.transform = `translateX(${-100 * backgroundIndex}%)`;
}

// Accesoire
let accessoryImages = null;

function updateAccessoryTopImages() {
  accessoryImages = document.querySelectorAll(".accessory-top img");
  console.log("backgroundImages", backgroundImages);
}

const previousButtonAccesoir = document.getElementById(
  "previous-button-accesoir",
);
const nextButtonAccesoir = document.getElementById("next-button-accesoir");
const accessoryTop = document.querySelector(".accessory-top");
let accessoryIndex = 0;

previousButtonAccesoir.addEventListener("click", () => {
  if (accessoryIndex > 0) {
    accessoryIndex -= 1;
  }

  updateAccessory();
});

nextButtonAccesoir.addEventListener("click", () => {
  if (accessoryIndex < accessoryImages.length - 1) {
    accessoryIndex += 1;
  }

  updateAccessory();
});

function updateAccessory() {
  accessoryTop.style.transform = `translateX(${-100 * accessoryIndex}%)`;
}

// Face
let FaceImages = null;

function updateFaceImages() {
  FaceImages = document.querySelectorAll(".character img");
  console.log("backgroundImages", backgroundImages);
}

const previousButtonFace = document.getElementById("previous-button-face");
console.log('previousButtonFace',previousButtonFace)
const nextButtonFace = document.getElementById("next-button-face");
const Face = document.querySelector(".character");
let FaceIndex = 0;

previousButtonFace.addEventListener("click", () => {
  if (FaceIndex > 0) {
    FaceIndex -= 1;
  }

  updateFace();
});

nextButtonFace.addEventListener("click", () => {
  if (FaceIndex < FaceImages.length - 1) {
    FaceIndex += 1;
  }

  updateFace();
});

function updateFace() {
  Face.style.transform = `translateX(${-100 * FaceIndex}%)`;
}
