module.exports = (sequelize, DataTypes) => (
  sequelize.define('user', {
    u_email: {
      type: DataTypes.STRING(30), 
      allowNull: false,
      unique: true,
    },
    u_nick: {
      type: DataTypes.STRING(30), 
      allowNull: true,
      unique: true,
    },
    u_sns_nick: {
      type: DataTypes.STRING(30), 
      allowNull: true,
    },
    u_provider: {
      type: DataTypes.STRING(30), 
      allowNull: true,
      defaultValue: 'local',
    },
    u_password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    u_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    u_birth: {
      type: DataTypes.DATEONLY, // DATE without time.
      allowNull: false,
    },
    u_nation: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    u_phnbr: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    u_sex: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    u_activate: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
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