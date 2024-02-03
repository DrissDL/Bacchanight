const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// Middleware pour la gestion des téléchargements de fichiers
app.use(fileUpload({
    limits: {
        fileSize: 10 * 1024 * 1024, // Limite de taille du fichier (ici 10 Mo)
    },
}));

// Middleware pour servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Route pour la galerie
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, './public/gallery.html'));
});

// Route pour la history
app.get('/history', (req, res) => {
    res.sendFile(path.join(__dirname, './public/history.html'));
});

// Route pour la credits
app.get('/credits', (req, res) => {
    res.sendFile(path.join(__dirname, './public/credits.html'));
});

// Route pour la choixtableaux
app.get('/choixtableaux', (req, res) => {
    res.sendFile(path.join(__dirname, './public/choixtableaux.html'));
});

// Route pour la stylish
app.get('/stylish', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stylish.html'));
});


// Route POST pour gérer le téléchargement de fichiers
app.post('/upload', (req, res) => {
    console.log('Téléchargement en cours...');
    // Récupérer le fichier téléchargé défini dans notre champ nommé "image"
    const { image } = req.files;

    // Si aucun fichier n'est soumis, renvoyer une réponse avec un code d'erreur 400
    if (!image) {
        console.log('Aucun fichier soumis');
        return res.sendStatus(400);
    }

    // Déplacer l'image téléchargée vers notre dossier de téléchargement
    image.mv(path.join(__dirname, 'public', 'upload', image.name), (err) => {
        if (err) {
            console.error('Erreur lors du téléchargement du fichier :', err);
            return res.status(500).send(err);
        }
        console.log('Fichier téléchargé avec succès');
        // Tout est bon, renvoyer une réponse avec un code de succès 200
        res.sendStatus(200);
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${port}`);
});
