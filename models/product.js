module.exports = (sequelize, DataTypes) => (
  sequelize.define('product', {
    product_name: {
      type: DataTypes.STRING(100), 
      allowNull: false,
    },
    product_num: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_country: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_city: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_country: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_city: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_main_category: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_sub_category: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_price: {
      type: DataTypes.STRING(30), 
      allowNull: false,
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_size: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    product_requirement: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    product_delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    // don't use camelcase for automatically added attributes but underscore style
    // so updatedAt will be updated_at
    charset: 'utf8',
    collate: 'utf8_unicode_ci',
    underscored: true,
    timestamps: true,
    paranoid: true,
  })
);