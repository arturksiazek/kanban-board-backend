module.exports = {
    services: {
        'controllers.task.index': {
            class: 'controllers/Task/IndexController',
            arguments: ['@repositories.task']
        },
        'controllers.task.create': {
            class: 'controllers/Task/CreateController',
            arguments: ['@repositories.task']
        },
        'controllers.auth.login': {
            class: 'controllers/Auth/LoginController'
        },
        'controllers.auth.logout': {
            class: 'controllers/Auth/LogoutController'
        },
        'controllers.board.show': {
            class: 'controllers/Board/ShowController',
            arguments: ['@repositories.board']
        },
        'controllers.board.create': {
            class: 'controllers/Board/CreateController',
            arguments: ['@repositories.board']
        }
    }
};
