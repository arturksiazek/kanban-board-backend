'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const boardId = uuidv4();
        const projectId = uuidv4();
        const listId = uuidv4();

        await queryInterface.bulkInsert('Boards', [
            {
                id: boardId,
                name: 'General',
                slug: 'general'
            }
        ]);

        await queryInterface.bulkInsert('Tasks', [
            {
                id: uuidv4(),
                name: 'Add example task',
                slug: 'add-example-task',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 1,
                projectId: projectId
            },
            {
                id: uuidv4(),
                name: 'Add another think',
                slug: 'add-another-thing',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 2,
                projectId: projectId
            },
            {
                id: uuidv4(),
                name: 'Add example task',
                slug: 'added-example-task',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 3,
                projectId: projectId
            }
        ]);

        await queryInterface.bulkInsert('Projects', [
            {
                id: projectId,
                name: 'Main project',
                boardId: boardId
            }
        ]);

        await queryInterface.bulkInsert('Lists', [
            {
                id: listId,
                name: 'Ready for development',
                boardId: boardId
            },
            {
                id: uuidv4(),
                name: 'In development',
                boardId: boardId
            },
            {
                id: uuidv4(),
                name: 'Ready for review',
                boardId: boardId
            },
            {
                id: uuidv4(),
                name: 'Ready for deploy',
                boardId: boardId
            },
            {
                id: uuidv4(),
                name: 'Completed',
                boardId: boardId
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Boards');
        await queryInterface.bulkDelete('Tasks');
        await queryInterface.bulkDelete('Projects');
        await queryInterface.bulkDelete('Lists');
    }
};
