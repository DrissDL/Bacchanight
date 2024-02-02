const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const app = express();
const port = 4000;

app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);

// Add this line to serve our index.html page
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/upload', (req, res) => {
    console.log('upload');
    // Get the file that was set to our field named "image"
    const { image } = req.files;


    // If no image submitted, exit
    if (!image) {
        console.log('pas de fichier')
        return res.sendStatus(400);
    }

    // If does not have image mime type prevent from uploading
    //if (/^image/.test(image.mimetype)) return res.sendStatus(400);

    // Move the uploaded image to our upload folder
    image.mv(__dirname + '/upload/' + image.name);
    console.log('test', __dirname + '/upload/' + image.name);

    // All good
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server run on http://localhost:${port}`);
});