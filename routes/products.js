const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const { isLoggedIn, isNotLoggedIn } = require('./middlewares/authorization');
const multer = require('multer');
const upload = multer({dest: './upload'})

router.use('/image', express.static('./upload'));

const { User, Request, Product, ProductImg } = require('../models');

router.post('/ask/add', upload.array('image1'), async (req, res) => {

    const {
        product_name,
        product_price,
        product_num, 
        product_main_category,
        product_sub_category,
        product_country,
        product_city,
        product_size,
        product_delivery,
        product_description,
        product_requirement,
    
        // request
        req_expired,
    
    } = req.body;
    
    try {
        // create request
        const request = await Request.create({
            user_id: req.user.id,
            req_expired: req_expired,
        });

        // create product
        const product = await Product.create({
            req_id: request.id,
            product_name: product_name,
            product_num: product_num,
            product_price: product_price,
            product_main_category: product_main_category,
            product_sub_category: product_sub_category,
            product_country: product_country,
            product_city: product_city,
            product_size: product_size,
            product_delivery: product_delivery,
            product_description: product_description,
            product_requirement: product_requirement,
        });

        // create image path
        const productImg = await ProductImg.create({
            product_id: product.id,

            image1: req.files[0].filename,
            image2: req.files[1].filename,
            image3: req.files[2].filename,
            image4: req.files[3].filename,
            image5: req.files[4].filename,
        })


    } catch (err) {
        console.log('[error] : ', err);
    }
    
});


module.exports = router;