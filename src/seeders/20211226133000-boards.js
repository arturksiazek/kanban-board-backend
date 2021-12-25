'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Boards', [
            {
                id: uuidv4(),
                title: 'General',
                slug: 'general'
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Boards');
    }
};
