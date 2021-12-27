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
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            slug: {
                allowNull: true,
                type: DataTypes.STRING
            },
            index: {
                allowNull: false,
                type: DataTypes.INTEGER
            }
        },
        {
            modelName: 'Board',
            sequelize
        }
    );

    Board.associate = ({ Project, List }) => {
        Board.hasMany(Project, {
            as: 'projects',
            foreignKey: 'boardId'
        });

        Board.hasMany(List, {
            as: 'lists',
            foreignKey: 'boardId'
        });

        return Board;
    };

    return Board;
};
