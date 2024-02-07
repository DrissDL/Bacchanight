/*const AccessoryButton = document.getElementById('AccessoryButton');
const Accessory = document.getElementById('Accessory');
const rawElements = document.getElementById('rawElements');

AccessoryButton.addEventListener('click', () => {
    console.log('click');
    // Rendez les éléments disponibles en modifiant le style display
    rawElements.style.display = 'block';
});
*/


const backgroundButton = document.getElementById('bgButton');
const navBackground = document.getElementById('nav-background');

backgroundButton.addEventListener('click', () => {
    console.log('click backgroundButton');
    navBackground.classList.toggle('inactive');
    backgroundButton.classList.toggle('selected');
})

const patternButton = document.getElementById('patternButton');
const navPattern = document.getElementById('nav-pattern');

patternButton.addEventListener('click', () => {
    navPattern.classList.toggle('inactive');
    patternButton.classList.toggle('selected');
})

const filterButton = document.getElementById('filterButton');
const navFilter = document.getElementById('nav-filter');

filterButton.addEventListener('click', () => {
    navFilter.classList.toggle('inactive');
    filterButton.classList.toggle('selected');
})