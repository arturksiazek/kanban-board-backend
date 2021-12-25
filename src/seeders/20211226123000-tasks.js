'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Tasks', [
            {
                id: uuidv4(),
                title: 'Ethiopian Sidamo',
                slug: 'ethiopian-sidamo',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                boardId: 1,
                referenceId: 1,
                projectId: 1
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Tasks');
    }
};
