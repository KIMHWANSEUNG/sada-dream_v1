module.exports = (sequelize, DataTypes) => (
  sequelize.define('travel', {
    date_start: {
      type: DataTypes.DATEONLY, // DATE without time. 
      allowNull: false,
    },
    date_end: {
      type: DataTypes.DATEONLY, // DATE without time.
      allowNull: false,
    },
    loc_start: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    loc_end: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    travel_for: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    price_limit: {
      type: DataTypes.STRING(30),
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