'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class List extends Model {}
    List.init(
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
            index: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            boardId: {
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            }
        },
        {
            modelName: 'List',
            sequelize
        }
    );

    List.associate = function ({ Task }) {
        List.hasMany(Task, {
            as: 'tasks',
            foreignKey: 'listId'
        });

        return List;
    };

    return List;
};
