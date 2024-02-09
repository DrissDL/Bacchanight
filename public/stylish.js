

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

const doneButton = document.getElementById('done');

doneButton.addEventListener('click', () => {
    navFilter.classList.add('inactive');
    filterButton.classList.remove('selected');
    navBackground.classList.add('inactive');
    backgroundButton.classList.remove('selected');
    navAccessory.classList.add('inactive');
    accessoryButton.classList.remove('selected');

    // Ajoutez un délai de 1 seconde (1000 millisecondes) avant de capturer l'écran
    setTimeout(() => {
        // Capture de toute la scène (contenant .character, .background et .accessory-top)
        html2canvas(document.querySelector('.canvas')).then(canvas => {
            // Convertir le canvas en base64
            const imageDataURL = canvas.toDataURL();
            // Envoi de l'URL de l'image à votre serveur Express via une requête POST
            fetch('/api_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ image: imageDataURL })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de l\'envoi de l\'URL de l\'image au serveur');
                }
                return response.json();
            })
            .then(data => {
                console.log('URL de l\'image envoyée avec succès au serveur:', data.message);
            })
            .catch(error => {
                console.error('Erreur:', error.message);
            });

            // Vous pouvez également la télécharger en tant que fichier (optionnel)
            const downloadLink = document.createElement('a');
            downloadLink.href = imageDataURL;
            downloadLink.download = 'customScene.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    }, 1000); // Délai de 1 seconde (1000 millisecondes)
});




// Récupérer l'élément img où afficher l'image générée
const generatedImage = document.getElementById('generatedImage');

// Stocker l'URL de l'image générée dans une variable (remplacez 'imageDataURL' par votre variable contenant l'URL)
const imageDataURL = image; // Remplacez 'URL_DE_VOTRE_IMAGE' par la chaîne base64 de votre image

// Définir la source de l'image générée
generatedImage.src = imageDataURL;