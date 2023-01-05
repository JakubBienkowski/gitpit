const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://teamup:Ry4IqhZIym1ljdnB@teamup-db.rn8ipk4.mongodb.net/User?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/x_page', requireAuth, (req, res) => res.render('x_page'));
app.get('/test', requireAuth, (req, res) => res.render('test'));
app.get('/user-page', requireAuth, (req, res) => res.render('user-page'));
app.get('/speed-dating', requireAuth, (req, res) => res.render('speeddating'));
app.use(authRoutes);


