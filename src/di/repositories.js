module.exports = {
    services: {
        'repositories.project': {
            class: 'repositories/ProjectRepository'
        },
        'repositories.task': {
            class: 'repositories/TaskRepository'
        },
        'repositories.board': {
            class: 'repositories/BoardRepository'
        }
    }
};
