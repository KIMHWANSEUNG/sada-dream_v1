
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(express.json({ extended: false }));

const multer = require('multer');
const upload = multer({dest: './upload'});


app.listen(port, () => console.log(`Listening on port ${port}`));