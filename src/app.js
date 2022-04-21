const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require ('body-parser');
const authRoutes = require('./routes/authRoutes');
const mainRoute = require('./routes/mainRoutes');
const apiAuthRoute = require('./routes/api/authRoutes');
const apiMainRoute = require('./routes/api/mainRoutes');
const cors = require('cors')

const app = express();
app.use(cors());

const publicPath = path.resolve (__dirname, '../public');
app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
}));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use('/', mainRoute);
app.use('/', authRoutes);
app.use('/api', apiAuthRoute);
app.use('/api', apiMainRoute);

app.listen(3001, () => console.log('Servidor corriendo, http://localhost:3001'));