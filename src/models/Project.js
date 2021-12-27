'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Project extends Model {}
    Project.init(
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
            modelName: 'Project',
            sequelize
        }
    );

    Project.associate = function ({ Task }) {
        Project.hasMany(Task, {
            as: 'tasks',
            foreignKey: 'projectId'
        });

        return Project;
    };

    return Project;
};
