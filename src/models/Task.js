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
            name: {
                allowNull: false,
                type: DataTypes.STRING
            },
            slug: {
                allowNull: false,
                type: DataTypes.STRING
            },
            description: {
                allowNull: true,
                type: DataTypes.STRING
            },
            projectId: {
                allowNull: false,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            listId: {
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

    Task.associate = ({ Project, List }) => {
        Task.belongsTo(Project, {
            as: 'project'
        });

        Task.belongsTo(List, {
            as: 'list'
        });

        return Task;
    };

    return Task;
};
