// Vo lecture10, da napravete na sloboden izbor eden website so koristenje na EJS po primerov sto go uchevme na chas, 
// no samo neka se razlikuva sodrzinata i pages, prilagodete gi kako sto vie sakate. 
// Neka bide razlicna sodrzina i razlicna website. Celiot kod organizirajte go soodvetno po primerot i terkot na lecture9, razdelen vo posebni modules itn.

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

//view denfine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (_, res) => {
    res.render('pages/home');
});

app.get('/missions', (req, res) => {
    const items = [
        {
            name: 'Artemis Program',
            url: 'https://www.nasa.gov/specials/artemis/'
        },
        {
            name: 'Commercial Crew Program',
            url: 'https://www.nasa.gov/exploration/commercial/crew/index.html'
        },
        {
            name: 'Curiosity Rover',
            url: 'https://www.nasa.gov/mission_pages/msl/index.html'
        },
        {
            name: 'Hubble Space Telescope',
            url: 'https://www.nasa.gov/mission_pages/hubble/main/index.html'
        },
    ];

    res.render('pages/missions', {missions: items});
});

app.get('/galleries', (req, res) => {
    const items = [
        {
            name: 'NASA Image of the Day',
            url: 'https://www.nasa.gov/multimedia/imagegallery/iotd.html/'
        },
        {
            name: 'Image Galleries',
            url: 'https://www.nasa.gov/multimedia/imagegallery/index.html'
        },
        {
            name: 'NASA Videos',
            url: 'https://www.nasa.gov/multimedia/videogallery/index.html'
        },
    ];

    res.render('pages/galleries', {galleries: items});
});









app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})