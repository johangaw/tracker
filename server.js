"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const models = require('./db.js');

const port = process.env.PORT || 5000;

app.use(express.static('./build'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', router);

// server the index page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
});



router.route('/positions')
.get((req, res) => {
    models.Position.findAll().then(positions => {
        res.json(positions);
    })
})
.post((req, res) => {
    models.Position.create(req.body).then(position => {
        res.json(position);
    });
});





// Launch server
app.listen(port, () => {
    console.log('Example app listening on port ' + port);
})