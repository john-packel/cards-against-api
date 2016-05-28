import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import passport from 'passport';
import db from './database/dbsetup';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

//-----------------------------------------------------------------------------------
import apiRouter from './routes/apiRouter';
import auth from './config/passport.js'
// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
});

app.post('/signup', auth.handleAuth);

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('listening on port', port);
});
