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
      backgroundContainer.style.transform = `translateX(${-100 * backgroundIndex}%)`;
    }