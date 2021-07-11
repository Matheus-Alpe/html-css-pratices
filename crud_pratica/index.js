const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    res.render('index.html');
});

app.listen(5000, () => console.log('listening on port 5000'));
