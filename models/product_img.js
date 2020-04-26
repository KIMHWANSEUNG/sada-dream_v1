module.exports = (sequelize, DataTypes) => (
  sequelize.define('product_img', {
    image1: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    image2: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    image3: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    image4: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    image5: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
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