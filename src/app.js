const express = require('express');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();

const publicPath = path.resolve (__dirname, './public');
app.use(express.static(publicPath));

app.use(session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', authRoutes);

app.listen(3000, () => console.log('Servidor corriendo, http://localhost:3000'));