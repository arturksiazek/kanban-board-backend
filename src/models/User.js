'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
    User.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            email: {
                allowNull: false,
                unique: true,
                type: DataTypes.STRING
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING
            }
        },
        {
            modelName: 'User',
            sequelize,

            defaultScope: {
                attributes: { exclude: ['password'] }
            },

            hooks: {
                beforeSave: async (user, options) => {
                    if (options.fields && options.fields.includes('password')) {
                        user.password = await bcrypt.hash(user.password, 10);
                    }
                }
            }
        }
    );

    return User;
};
