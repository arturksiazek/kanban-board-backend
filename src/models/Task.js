'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Task extends Model {}
    Task.init(
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
            description: {
                allowNull: true,
                type: DataTypes.STRING
            },
            boardId: {
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            index: {
                allowNull: false,
                type: DataTypes.INTEGER
            }
        },
        {
            modelName: 'Task',
            sequelize
        }
    );

    return Task;
};
