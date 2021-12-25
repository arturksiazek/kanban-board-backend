'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const boardId = uuidv4();
        const projectId = uuidv4();

        await queryInterface.bulkInsert('Boards', [
            {
                id: boardId,
                title: 'General',
                slug: 'general'
            }
        ]);

        await queryInterface.bulkInsert('Tasks', [
            {
                id: uuidv4(),
                title: 'Add example task',
                slug: 'add-example-task',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                boardId: boardId,
                index: 1,
                projectId: projectId
            }
        ]);

        await queryInterface.bulkInsert('Projects', [
            {
                id: projectId,
                title: 'Main project',
                boardId: boardId
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Boards');
        await queryInterface.bulkDelete('Tasks');
        await queryInterface.bulkDelete('Projects');
    }
};
