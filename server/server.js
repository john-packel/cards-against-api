import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
});

app.listen(port, () => {
  console.log('listening on port', port);
});
