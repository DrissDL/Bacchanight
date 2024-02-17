document.addEventListener('DOMContentLoaded', () => {
    const doneButton = document.getElementById('done');
    let clickCount = 0; // Variable pour suivre le nombre de clics
    doneButton.style.display = 'none'; // Cacher le bouton "Terminer" par défaut

    // Gestionnaire d'événement pour chaque clic sur la page
    document.addEventListener('click', () => {
        clickCount++; // Incrémenter le compteur de clics
        // Vérifier si le nombre de clics est inférieur à 2
        if (clickCount < 2) {
            doneButton.style.display = 'none'; // Cacher le bouton "Terminer"
        } else {
            doneButton.style.display = 'flex'; // Afficher le bouton "Terminer"
        }
    });

    let accessoryButton, navAccessory, backgroundButton, navBackground, filterButton, navFilter;

    // Vérification de la présence des éléments avant d'ajouter les écouteurs d'événements
    if (document.getElementById('accessoryButton')) {
        accessoryButton = document.getElementById('accessoryButton');
        navAccessory = document.getElementById('nav-accessory');

        accessoryButton.addEventListener('click', () => {
            console.log('click accessoryButton');
            navFilter.classList.add('inactive');
            filterButton.classList.remove('selected');
            navBackground.classList.add('inactive');
            backgroundButton.classList.remove('selected');
            navAccessory.classList.toggle('inactive');
            accessoryButton.classList.toggle('selected');
        });
    }

    if (document.getElementById('bgButton')) {
        backgroundButton = document.getElementById('bgButton');
        navBackground = document.getElementById('nav-background');

        backgroundButton.addEventListener('click', () => {
            console.log('click backgroundButton');
            navFilter.classList.add('inactive');
            filterButton.classList.remove('selected');
            navAccessory.classList.add('inactive');
            accessoryButton.classList.remove('selected');
            navBackground.classList.toggle('inactive');
            backgroundButton.classList.toggle('selected');
        });
    }

    if (document.getElementById('filterButton')) {
        filterButton = document.getElementById('filterButton');
        navFilter = document.getElementById('nav-filter');

        filterButton.addEventListener('click', () => {
            navBackground.classList.add('inactive');
            backgroundButton.classList.remove('selected');
            navAccessory.classList.add('inactive');
            accessoryButton.classList.remove('selected');
            navFilter.classList.toggle('inactive');
            filterButton.classList.toggle('selected');
        });
    }

    if (document.getElementById('done')) {
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
    }

    const generatedImage = document.getElementById('generatedImage');

    const imageDataURL = localStorage.getItem('customImage');
    if (imageDataURL) {
        generatedImage.src = imageDataURL;
    } else {
        generatedImage.src = '/path/to/default/image.png';
    }
});
