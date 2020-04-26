const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const multer = require('multer');

const upload = multer({dest: './uploads'})


const { User, Request, Product, ProductImg } = require('../../models');

exports.createRequest = async (req, res, next) => {
  
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

    // porduct image
    product_images
  } = req.body;

  try {
    // 요청 생성
    const request = await Request.create({
      user_id: req.user.id,
      req_expired: req_expired,
    });
    
    // 상품 생성
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

    
    
    // 상품 이미지 등록
    const product_img = await ProductImg.create({
      product_id: product.id,
      image1: img[0],
      image2: img[1],
      image3: img[2],
      image4: img[3],
      image5: img[4],
    });

    return res.json({
      
    });

  } catch (err) {
    console.log('[error] createRequest:', err);
  }

};