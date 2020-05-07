module.exports = (sequelize, DataTypes) => (
  sequelize.define('request', {
    req_expired: {
      type: DataTypes.DATEONLY, // DATE without time. 
      allowNull: false,
    },
    req_status: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '매칭대기',
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