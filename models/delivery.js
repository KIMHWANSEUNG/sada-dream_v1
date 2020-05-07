module.exports = (sequelize, DataTypes) => (
  sequelize.define('delivery', {
    zip_code : {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    address_detail: {
      type: DataTypes.STRING(100),
      allowNull: false,
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