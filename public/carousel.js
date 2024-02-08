// Background

let backgroundImages = null;
 
function updateBackgroundImages(){
  backgroundImages = document.querySelectorAll('.background img');
  console.log('backgroundImages', backgroundImages)
}
const previousButtonBackground = document.getElementById('previous-button-background');
    const nextButtonBackground = document.getElementById('next-button-background');
    const backgroundContainer = document.querySelector('.background');
    
    console.log('back', backgroundImages)
    let backgroundIndex = 0;



    previousButtonBackground.addEventListener('click', () => {
      if(backgroundIndex > 0) {
        backgroundIndex -= 1;
      }

      updateBackground();
    });

    nextButtonBackground.addEventListener('click', () => {
      if(backgroundIndex < backgroundImages.length-1) {
        backgroundIndex += 1;
      }

      updateBackground();
    });

    function updateBackground() {
      backgroundContainer.style.left = `${-100 * backgroundIndex}%`;
    }

// Accesoire
let accessoryImages = null;

    function  updateAccessorytopImages(){
      accessoryImages = document.querySelectorAll('.accessory-top img');
      console.log('backgroundImages', backgroundImages)
    }

    const previousButtonAccesoir = document.getElementById('previous-button-accesoir');
    const nextButtonAccesoir = document.getElementById('next-button-accesoir');
    const accessoryTop = document.querySelector('.accessory-top');
    let accessoryIndex = 0;


    previousButtonAccesoir.addEventListener('click', () => {
      if(accessoryIndex > 0) {
        accessoryIndex -= 1;
      }

      updateAccessory();
    });

    nextButtonAccesoir.addEventListener('click', () => {
      if(accessoryIndex < accessoryImages.length-1) {
        accessoryIndex += 1;
      }

      updateAccessory();
    });

    function updateAccessory() {
      accessoryTop.style.transform = `translateX(${-100 * accessoryIndex}%)`;
    }