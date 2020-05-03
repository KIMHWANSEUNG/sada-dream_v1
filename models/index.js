const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Travel = require('./travel')(sequelize, Sequelize);
db.Request = require('./request')(sequelize, Sequelize);
db.Product = require('./product')(sequelize, Sequelize);
db.ProductImg = require('./product_img')(sequelize, Sequelize);
db.Delivery = require('./delivery')(sequelize, Sequelize);
db.Direct = require('./direct')(sequelize, Sequelize);
db.Accept = require('./accept')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.CommentReply = require('./comment_reply')(sequelize, Sequelize);

// user of travel 1 : N
db.User.hasMany(db.Travel, { foreignKey: 'user_id', sourceKey: 'id' });
db.Travel.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' });

// user of product 1 : N
db.User.hasMany(db.Travel, { foreignKey: 'user_id', sourceKey: 'id' });
db.Product.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' })

// user of request 1 : N
db.User.hasMany(db.Request, { foreignKey: 'user_id', sourceKey: 'id' });
db.Request.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' });

// request of product 1 : 1
db.Request.hasOne(db.Product, { foreignKey: 'req_id', sourceKey: 'id' });
db.Product.belongsTo(db.Request, { foreignKey: 'req_id', sourceKey: 'id' });

// product of product_img 1 : 1
db.Product.hasOne(db.ProductImg, { foreignKey: 'product_id', sourceKey: 'id' });
db.ProductImg.belongsTo(db.Product, { foreignKey: 'product_id', sourceKey: 'id' });

// product of delivery 1 : 1
db.Product.hasOne(db.Delivery, { foreignKey: 'product_id', sourceKey: 'id' });
db.Delivery.belongsTo(db.Product, { foreignKey: 'product_id', sourceKey: 'id' });

// product of direct 1 : 1
db.Product.hasOne(db.Direct, { foreignKey: 'product_id', sourceKey: 'id' });
db.Direct.belongsTo(db.Product, { foreignKey: 'product_id', sourceKey: 'id' });

// user of accept 1 : N

db.User.hasMany(db.Accept, { foreignKey: 'user_id', sourceKey: 'id' });
db.Accept.belongsTo(db.User, { foreignKey: 'user_id', sourceKey: 'id' });

// request of accept 1 : 1

db.Request.hasOne(db.Accept, { foreignKey: 'req_id', sourceKey: 'id' });
db.Accept.belongsTo(db.Request, { foreignKey: 'req_id', sourceKey: 'id' });

// request of comment 1 : N

db.Request.hasMany(db.Comment, { foreignKey: 'req_id', sourceKey: 'id' });
db.Comment.belongsTo(db.Request, { foreignKey: 'req_id', sourceKey: 'id' });

// comment of comment_reply 1 : N

db.Comment.hasMany(db.CommentReply, { foreignKey: 'comment_id', sourceKey: 'id' });
db.CommentReply.belongsTo(db.Comment, { foreignKey: 'comment_id', sourceKey: 'id' });

module.exports = db;
