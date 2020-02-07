const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/customers', (req, res) => {
  res.send([

  ])
});

// image folder shares upload
app.use('/image', express.static('./upload'));

app.post('/api/product/add', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO PRODUCT VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  let image = '/image/' + req.file.filename;
  let product_category = req.body.product_category;
  let product_category_detail = req.body.product_category_detail;
  let product_country = req.body.product_country;
  let product_city = req.body.product_city;
  let product_name = req.body.product_name;
  let product_count = req.body.product_count;
  let product_explain = req.body.product_explain;
  let product_outdate = req.body.product_outdate;
  let product_price = req.body.product_price;
  let product_request = req.body.product_request;
  let params = [image, product_category, product_category_detail, product_country, product_city
  ,product_name ,product_count ,product_explain ,product_outdate ,product_price ,product_request];
  
  connection.query(sql, params, 
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
