// Background

let backgroundImages = null;

function updateBackgroundImages() {
  backgroundImages = document.querySelectorAll(".background img");
  console.log("backgroundImages", backgroundImages);
}
const previousButtonBackground = document.getElementById(
  "previous-button-background",
);
previousButtonBackground.classList.add('inactive');
const nextButtonBackground = document.getElementById("next-button-background");
const backgroundContainer = document.querySelector(".background");

console.log("back", backgroundImages);
let backgroundIndex = 0;

previousButtonBackground.addEventListener("click", () => {
  nextButtonBackground.classList.remove('inactive');
  if (backgroundIndex > 0) {
    backgroundIndex -= 1;
  }

  if (backgroundIndex === 0) {
    previousButtonBackground.classList.add('inactive');
  } else {
    previousButtonBackground.classList.remove('inactive');
  }
  
  updateBackground();
});

nextButtonBackground.addEventListener("click", () => {
  previousButtonBackground.classList.remove('inactive');
  if (backgroundIndex < backgroundImages.length - 1) {
    backgroundIndex += 1;
  }

  if (backgroundIndex === backgroundImages.length - 1) {
    nextButtonBackground.classList.add('inactive');
  } else {
    nextButtonBackground.classList.remove('inactive');
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
previousButtonAccesoir.classList.add('inactive');
const nextButtonAccesoir = document.getElementById("next-button-accesoir");
const accessoryTop = document.querySelector(".accessory-top");
let accessoryIndex = 0;

previousButtonAccesoir.addEventListener("click", () => {
  nextButtonAccesoir.classList.remove('inactive');
  if (accessoryIndex > 0) {
    accessoryIndex -= 1;
  }
  
  if (accessoryIndex === 0) {
    previousButtonAccesoir.classList.add('inactive');
  } else {
    previousButtonAccesoir.classList.remove('inactive');
  }
  updateAccessory();
});

nextButtonAccesoir.addEventListener("click", () => {
  previousButtonAccesoir.classList.remove('inactive');

  if (accessoryIndex < accessoryImages.length - 1) {
    accessoryIndex += 1;
  }

  if (accessoryIndex === accessoryImages.length - 1) {
    nextButtonAccesoir.classList.add('inactive');
  } else {
    nextButtonAccesoir.classList.remove('inactive');
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
previousButtonFace.classList.add('inactive');
console.log('previousButtonFace',previousButtonFace)
const nextButtonFace = document.getElementById("next-button-face");
const Face = document.querySelector(".character");
let FaceIndex = 0;

previousButtonFace.addEventListener("click", () => {
  nextButtonFace.classList.remove('inactive');
  if (FaceIndex > 0) {
    FaceIndex -= 1;
  }
  
  if (FaceIndex === 0) {
    previousButtonFace.classList.add('inactive');
  } else {
    previousButtonFace.classList.remove('inactive');
  }

  updateFace();
});



nextButtonFace.addEventListener("click", () => {
  previousButtonFace.classList.remove('inactive');
  if (FaceIndex < FaceImages.length - 1) {
    FaceIndex += 1;
  }

    if (FaceIndex === FaceImages.length - 1) {
      nextButtonFace.classList.add('inactive');
    } else {
      nextButtonFace.classList.remove('inactive');
    }
  updateFace();
});


function updateFace() {
  Face.style.transform = `translateX(${-100 * FaceIndex}%)`;
}
