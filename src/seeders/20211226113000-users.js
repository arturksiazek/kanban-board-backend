'use strict';
const { User } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await User.create({
            id: null,
            name: 'Joe Doe',
            email: 'admin@kanban-board.test',
            password: 'Passw0rd'
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};
