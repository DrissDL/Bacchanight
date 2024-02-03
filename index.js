const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const { spawn } = require('child_process');

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

// Définir le dossier statique pour servir les fichiers publics
app.use(express.static(path.join(__dirname, 'static')));

// Fonction pour créer un commit avec un message spécifié
function createCommit(message) {
    return new Promise((resolve, reject) => {
        exec(`git add . && git commit -m "${message}"`, (error, stdout, stderr) => {
            if (error) {
                console.error('Erreur lors de la création du commit :', error);
                reject(error);
            }
            if (stderr) {
                console.error('Erreur lors de la création du commit :', stderr);
                reject(stderr);
            }
            console.log('Commit créé avec succès :', stdout);
            resolve(stdout);
        });
    });
}

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
app.post('/upload', async (req, res) => {
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
    image.mv(path.join(uploadDir, image.name), async (err) => {
        if (err) {
            console.error('Erreur lors du téléchargement du fichier :', err);
            return res.status(500).send(err);
        }
        console.log('Fichier téléchargé avec succès');

        // Créer un commit avec un message indiquant le nom de l'image téléchargée
        try {
            await createCommit(`Ajout de l'image ${image.name}`);
            console.log('Commit créé avec succès');

            // Lancer le script loadImages.js
            const child = spawn('node', ['loadImages.js']);
            child.stdout.on('data', (data) => {
                console.log(`stdout: ${data}`);
            });
            child.stderr.on('data', (data) => {
                console.error(`stderr: ${data}`);
            });
            child.on('close', (code) => {
                console.log(`child process exited with code ${code}`);
                
                // Exécuter la commande de pull
                exec('git pull', (error, stdout, stderr) => {
                    if (error) {
                        console.error('Erreur lors de la commande de pull :', error);
                        return;
                    }
                    console.log('Pull effectué avec succès :', stdout);

                    // Exécuter la commande de push
                    exec('git push', (error, stdout, stderr) => {
                        if (error) {
                            console.error('Erreur lors de la commande de push :', error);
                            return;
                        }
                        console.log('Push effectué avec succès :', stdout);
                    });
                });
            });

            res.sendStatus(200);
        } catch (error) {
            console.error('Erreur lors de la création du commit :', error);
            res.status(500).send(error);
        }
    });
});
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur fonctionne sur http://localhost:${port}`);
});
