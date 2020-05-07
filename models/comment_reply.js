module.exports = (sequelize, DataTypes) => (
  sequelize.define('comment_reply', {
    comment_reply: {
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