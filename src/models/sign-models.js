'use strict';

const signUser = (sequelize, DataTypes) => sequelize.define('signUser', {
   username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
module.exports = signUser;