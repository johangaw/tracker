const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v1', router);

router.route('/positions')
    .get((req, res) => {
        res.json({ data: 'Hello World!' });
    })
    .post((req, res) => {
        res.json({ data: req.body.name });
    });



// Launch server
app.listen(port, () => {
    console.log('Example app listening on port ' + port);
})