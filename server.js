const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'josé reVELES'
    });

})

app.get('/about', (req, res) => {

    res.render('about');

})

// app.get('/data', (req, res) => {
//     res.send('Hola data')
// })

//sin heroku
// app.listen(3000, () => {
//     console.log('Escuchando port 3000');
// });

//heroku, sin conocer el puerto
app.listen(port, () => {
    console.log(`Escuchando port ${port}`);
});