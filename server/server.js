var babel = require('babel-register'),
    bodyParser = require('body-parser'),
    path = require('path'),
    express = require('express');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
});

app.listen(3000, () => (
  console.log('listening on port 3000!')
));
