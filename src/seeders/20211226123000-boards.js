'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const boardId = uuidv4();
        const mainProjectId = uuidv4();
        const jarzebinoweProjectId = uuidv4();
        const listId = uuidv4();

        await queryInterface.bulkInsert('Boards', [
            {
                id: boardId,
                name: 'General',
                slug: 'general',
                index: 1
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
                projectId: mainProjectId
            },
            {
                id: uuidv4(),
                name: 'Add another think',
                slug: 'add-another-thing',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 2,
                projectId: jarzebinoweProjectId
            },
            {
                id: uuidv4(),
                name: 'Add example task',
                slug: 'added-example-task',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 3,
                projectId: mainProjectId
            },
            {
                id: uuidv4(),
                name: 'Add another think great',
                slug: 'add-another-thing-great',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 4,
                projectId: jarzebinoweProjectId
            },
            {
                id: uuidv4(),
                name: 'Add example task great 2',
                slug: 'added-example-task-great-2',
                description:
                    'Sidamo is one of the most prolific growing regions in Ethiopia, putting out large volumes of consistently great coffee each year.',
                listId: listId,
                index: 5,
                projectId: mainProjectId
            }
        ]);

        await queryInterface.bulkInsert('Projects', [
            {
                id: mainProjectId,
                name: 'Main project',
                boardId: boardId,
                color: 'gray',
                index: 1
            },
            {
                id: jarzebinoweProjectId,
                name: 'Jarzebinowe',
                boardId: boardId,
                color: 'red',
                index: 2
            },
            {
                id: uuidv4(),
                name: 'Stacja Wola',
                boardId: boardId,
                color: 'orange',
                index: 3
            },
            {
                id: uuidv4(),
                name: 'Enter',
                boardId: boardId,
                color: 'yellow',
                index: 4
            },
            {
                id: uuidv4(),
                name: 'Doslonce',
                boardId: boardId,
                color: 'green',
                index: 5
            },
            {
                id: uuidv4(),
                name: 'Interbud',
                boardId: boardId,
                color: 'pink',
                index: 6
            }
        ]);

        await queryInterface.bulkInsert('Lists', [
            {
                id: listId,
                name: 'Ready for development',
                boardId: boardId,
                index: 1
            },
            {
                id: uuidv4(),
                name: 'In development',
                boardId: boardId,
                index: 2
            },
            {
                id: uuidv4(),
                name: 'Ready for review',
                boardId: boardId,
                index: 3
            },
            {
                id: uuidv4(),
                name: 'Ready for deploy',
                boardId: boardId,
                index: 4
            },
            {
                id: uuidv4(),
                name: 'Completed',
                boardId: boardId,
                index: 5
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
