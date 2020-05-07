module.exports = (sequelize, DataTypes) => (
  sequelize.define('comment', {
    comment: {
      type: DataTypes.STRING(100),
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