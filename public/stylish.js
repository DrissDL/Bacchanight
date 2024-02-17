document.addEventListener('DOMContentLoaded', () => {
    const accessoryButton = document.getElementById('accessoryButton');
    const navAccessory = document.getElementById('nav-accessory');

    accessoryButton.addEventListener('click', () => {
        console.log('click accessoryButton');
        navFilter.classList.add('inactive');
        filterButton.classList.remove('selected');
        navBackground.classList.add('inactive');
        backgroundButton.classList.remove('selected');
        navAccessory.classList.toggle('inactive');
        accessoryButton.classList.toggle('selected');
    });

    const backgroundButton = document.getElementById('bgButton');
    const navBackground = document.getElementById('nav-background');

    backgroundButton.addEventListener('click', () => {
        console.log('click backgroundButton');
        navFilter.classList.add('inactive');
        filterButton.classList.remove('selected');
        navAccessory.classList.add('inactive');
        accessoryButton.classList.remove('selected');
        navBackground.classList.toggle('inactive');
        backgroundButton.classList.toggle('selected');
    });

    const filterButton = document.getElementById('filterButton');
    const navFilter = document.getElementById('nav-filter');

    filterButton.addEventListener('click', () => {
        navBackground.classList.add('inactive');
        backgroundButton.classList.remove('selected');
        navAccessory.classList.add('inactive');
        accessoryButton.classList.remove('selected');
        navFilter.classList.toggle('inactive');
        filterButton.classList.toggle('selected');
    });

    const doneButton = document.getElementById('done');

    doneButton.addEventListener('click', () => {
        navFilter.classList.add('inactive');
        filterButton.classList.remove('selected');
        navBackground.classList.add('inactive');
        backgroundButton.classList.remove('selected');
        navAccessory.classList.add('inactive');
        accessoryButton.classList.remove('selected');

        setTimeout(() => {
            html2canvas(document.querySelector('.canvas')).then(canvas => {
                localStorage.clear(); // Supprimer à la fois l'image individuelle et la liste d'images
                const imageDataURL = canvas.toDataURL();
                localStorage.setItem('customImage', imageDataURL);
                window.location.href = '/terminer';
            });
        }, 1000);
    });

    const generatedImage = document.getElementById('generatedImage');

    const imageDataURL = localStorage.getItem('customImage');
    if (imageDataURL) {
        generatedImage.src = imageDataURL;
    } else {
        generatedImage.src = '/path/to/default/image.png';
    }
});
