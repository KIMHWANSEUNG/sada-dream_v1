const express = require('express');
const router = express.Router();
const fs = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares/authorization');
const multer = require('multer');
const upload = multer({dest: './upload'})

router.use('/image', express.static('./upload'));

router.post('/ask/add', upload.array('image1'), (req, res) => {

    console.log('req.file.filename', req.files[0].filename); // image1 save
    console.log('req.file.filename', req.files[1].filename); // image2 save
    console.log('req.file.filename', req.files[2].filename); // image3 save
    console.log('req.file.filename', req.files[3].filename); // image4 save
    console.log('req.file.filename', req.files[4].filename); // image5 save
    return res.json({success:1});
    
});


module.exports = router;