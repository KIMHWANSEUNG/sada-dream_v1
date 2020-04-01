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
  res.send([])
});

// image folder shares upload
app.use('/image', express.static('./upload'));

// 요청 상품 등록 POST
app.post('/api/ask/add', upload.single('image'), (req, res) => {
  
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
    , product_name, product_count, product_explain, product_outdate, product_price, product_request];

  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

// 회원가입 POST
app.post('/api/auth/userReg', (req, res) => {
  let sql = 'INSERT INTO USER(u_email, u_pass, u_name, u_birth, u_nation, u_phnbr, u_sex) VALUES(?, ?, ?, ?, ?, ?, ?)';
  let user_email = req.body.user_email;
  let user_password = req.body.user_password;
  let user_name = req.body.user_name;
  let user_birth = req.body.user_birth;
  let user_country_number = req.body.user_country_number;
  let user_phone_number = req.body.user_phone_number;
  let user_gender = req.body.user_gender;
  
  let params = [user_email, user_password, user_name, user_birth, 
  user_country_number, user_phone_number, user_gender];
  
  console.log('####');
  console.log(req.body);
  console.log('####');

  connection.query(sql, params, 
    (err, rows, fields) => {
      if(err) {
        console.log(err)
      }
      res.send(rows);
    })
});


// 요청 상품 리스트 GET
app.get('/api/ask/list', (req, res) => {
  connection.query(
    'select * from PRODUCT',
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.listen(port, () => console.log(`Listening on port ${port}`));