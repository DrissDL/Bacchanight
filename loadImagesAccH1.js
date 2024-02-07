const fs = require('fs');
const path = require('path');

const imagesDirectory = './static/PortraitH/Top'; // Chemin vers le dossier des images

// Supprimer le contenu existant du fichier imagesList.js
fs.writeFileSync('./public/imagesListAccH1.js', '', 'utf-8');

fs.readdir(imagesDirectory, (err, files) => {
  if (err) {
    console.error('Erreur lors de la lecture du dossier des images', err);
    return;
  }

  // Filtrer les fichiers pour ne garder que les images
  const imageFiles = files.filter(file => /\.(jpg|png|gif|jpeg|webp)$/.test(file));

  // Générer une liste de chemins d'accès relatifs pour les images
  const data = imageFiles.map(imageFile => (`/PortraitH/Top/${imageFile}`));

  // Convertir la liste en JSON
  const imagesList = JSON.stringify(data);

  // Écrire la liste d'images dans le fichier imagesList.js
  fs.appendFileSync('./public/imagesListAccH1.js', `export const images = ${imagesList};`, 'utf-8');
});
