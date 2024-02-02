const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000; // Utilisez le port défini par l'environnement ou le port 4000 par défaut

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

// Ajoutez cette ligne pour servir votre page index.html
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/upload', (req, res) => {
    console.log('upload');
    // Récupérez le fichier qui a été défini dans notre champ nommé "image"
    const { image } = req.files;

    // Si aucun fichier n'est soumis, quittez
    if (!image) {
        console.log('pas de fichier')
        return res.sendStatus(400);
    }

    // Déplacez l'image téléchargée vers notre dossier de téléchargement
    image.mv(path.join(__dirname, '/upload/', image.name), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        console.log('Fichier téléchargé avec succès');
        // Tout est bon
        res.sendStatus(200);
    });
});

app.listen(port, () => {
    console.log(`Server run on http://localhost:${port}`);
});
