const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
})); 

app.set('view engine', 'ejs');

app.set('views', path.resolve(__dirname, './views'));

app.listen(3000, () => console.log('Servidor corriendo, http://localhost:3000'));