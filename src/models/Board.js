'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Board extends Model {}
    Board.init(
        {
            id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING
            },
            slug: {
                allowNull: true,
                type: DataTypes.STRING
            }
        },
        {
            modelName: 'Board',
            sequelize
        }
    );

    Board.associate = ({ Task }) => {
        Board.hasMany(Task, {
            as: 'tasks',
            foreignKey: 'boardId'
        });

        return Board;
    };

    return Board;
};
