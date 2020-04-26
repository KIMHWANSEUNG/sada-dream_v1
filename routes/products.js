const express = require('express');
const router = express.Router();
const fs = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares/authorization');

router.use('/image', express.static('./upload'));

router.post('/ask/add', (req, res) => {

    console.log('success');
    return res.json({success:1});
    
});


module.exports = router;