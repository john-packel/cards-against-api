import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import db from './database/dbsetup';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//-----------------------------------------------------------------------------------
import apiRouter from './routes/api/index.js';
// ROUTES
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
});

app.use('/api', apiRouter);

app.get('*', function(req, res){
  res.status(404);
  res.send('page does not exist');

});

app.listen(port, () => {
  console.log('listening on port', port);
});
