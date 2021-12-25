module.exports = {
    services: {
        'controllers.task.index': {
            class: 'controllers/Task/IndexController',
            arguments: ['@repositories.product']
        },
        'controllers.task.create': {
            class: 'controllers/Task/CreateController',
            arguments: ['@repositories.product']
        },
        'controllers.auth.login': {
            class: 'controllers/Auth/LoginController'
        },
        'controllers.auth.logout': {
            class: 'controllers/Auth/LogoutController'
        }
    }
};
