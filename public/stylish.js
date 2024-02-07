/*const AccessoryButton = document.getElementById('AccessoryButton');
const Accessory = document.getElementById('Accessory');
const rawElements = document.getElementById('rawElements');

AccessoryButton.addEventListener('click', () => {
    console.log('click');
    // Rendez les éléments disponibles en modifiant le style display
    rawElements.style.display = 'block';
});
*/

const accessoryButton = document.getElementById('accessoryButton');
const navAccessory = document.getElementById('nav-accessory');

accessoryButton.addEventListener('click', () => {
    console.log('click accessoryButton');
    //reset
    // navPattern.classList.add('inactive');
    // patternButton.classList.remove('selected')
    navFilter.classList.add('inactive');
    filterButton.classList.remove('selected');
    navBackground.classList.add('inactive');
    backgroundButton.classList.remove('selected');

    navAccessory.classList.toggle('inactive');
    accessoryButton.classList.toggle('selected');
})


const backgroundButton = document.getElementById('bgButton');
const navBackground = document.getElementById('nav-background');

backgroundButton.addEventListener('click', () => {
    console.log('click backgroundButton');
    //reset
    // navPattern.classList.add('inactive');
    // patternButton.classList.remove('selected')
    navFilter.classList.add('inactive');
    filterButton.classList.remove('selected');
    navAccessory.classList.add('inactive');
    accessoryButton.classList.remove('selected');
    

    navBackground.classList.toggle('inactive');
    backgroundButton.classList.toggle('selected');
})



// const patternButton = document.getElementById('patternButton');
// const navPattern = document.getElementById('nav-pattern');

// patternButton.addEventListener('click', () => {
//         //reset
//         navBackground.classList.add('inactive');
//         backgroundButton.classList.remove('selected')
//         navFilter.classList.add('inactive');
//         filterButton.classList.remove('selected');
//         navAccessory.classList.add('inactive');
//         accessoryButton.classList.remove('selected');
        



//     navPattern.classList.toggle('inactive');
//     patternButton.classList.toggle('selected');
// })

const filterButton = document.getElementById('filterButton');
const navFilter = document.getElementById('nav-filter');

filterButton.addEventListener('click', () => {
            //reset
            navBackground.classList.add('inactive');
            backgroundButton.classList.remove('selected')
            // navPattern.classList.add('inactive');
            // patternButton.classList.remove('selected');
            navAccessory.classList.add('inactive');
            accessoryButton.classList.remove('selected');


    navFilter.classList.toggle('inactive');
    filterButton.classList.toggle('selected');


})

const characterImage = document.querySelector('.character img');
const hueRangeInput = document.getElementById("hue-range");

hueRangeInput.addEventListener("input", function() {
    const hueValue = this.value; // Valeur de l'input range
    const filterValue = `hue-rotate(${hueValue}deg)`; // Création de la valeur du filtre

    // Appliquer la valeur du filtre à l'image
    characterImage.style.filter = filterValue;
    characterImage.style.webkitFilter = filterValue; // Pour les navigateurs WebKit (Safari, Chrome)
    characterImage.style.mozFilter = filterValue; // Pour les navigateurs Mozilla (Firefox)
});