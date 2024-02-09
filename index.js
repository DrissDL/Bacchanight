const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config()

const app = express();

const dbUser = process.env.DB_USER;
const dbName = process.env.DB_NAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

const pgp = require("pg-promise")(/*options*/);
const db = pgp(`postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);
console.log(dbHost, dbName, dbPassword, dbPort, dbUser)
console.log('db',db.tables);
const port = process.env.PORT || 4000;

// Middleware pour la gestion des téléchargements de fichiers
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb'}))

// Middleware pour servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Définir le dossier statique pour servir les fichiers publics
app.use(express.static(path.join(__dirname, 'static')));

// bla bla
app.use(express.json())

// Route pour la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Route pour la galerie
app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, './public/gallery.html'));
});

// Route pour la galerie root
app.post('/api_image', (req, res) => {
    const image = req.body.image;
    db.one('INSERT INTO images (image) VALUES ($1) RETURNING *', [image])
        .then(result => {
            //console.log('Insertion réussie :', result);
            res.send({ retour: req.body.image });
        })
        .catch(err => {
            console.error('Erreur lors de l\'insertion :', err);
            res.status(500).send('Erreur lors de l\'insertion de l\'image.');
        });
});

app.get('/api_image', (req, res) => {
    db.any('SELECT * FROM images')
        .then(data => {
            console.log('Données récupérées avec succès :', data);
            res.json(data); // Envoyer les données en tant que réponse JSON
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données :', error);
            res.status(500).send('Erreur lors de la récupération des données de la table images.');
        });
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
// Route pour la stylish
app.get('/stylishH', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stylishH.html'));
});
// Route pour la stylish
app.get('/stylishH2', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stylishH2.html'));
});
// Route pour la stylish
app.get('/stylishH4', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stylishH4.html'));
});
// Route pour la stylish
app.get('/stylishMadeleine', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stylishMadeleine.html'));
});
// Route pour la stylish
app.get('/stylishLucrece', (req, res) => {
    res.sendFile(path.join(__dirname, './public/stylishLucrece.html'));
});


// Route pour la terminer
app.get('/terminer', (req, res) => {
    res.sendFile(path.join(__dirname, './public/terminer.html'));
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

    // Chemin complet du dossier de destination
    const uploadDir = path.join(__dirname, 'static', 'upload');

    // Vérifier si le dossier de destination existe, sinon le créer
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Déplacer l'image téléchargée vers notre dossier de téléchargement
    image.mv(path.join(uploadDir, image.name), (err) => {
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
