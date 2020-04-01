const express = require('express');
const router = express.Router();

router.post('/api/auth/userReg', (req, res) => {
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
  
  connection.query(sql, params, 
    (err, rows, fields) => {
      if(err) {
        console.log(err)
      }
      res.send(rows);
    })
});


module.exports = router;