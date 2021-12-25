module.exports = {
    services: {
        'controllers.product.index': {
            class: 'controllers/Product/IndexController',
            arguments: ['@repositories.product']
        },
        'controllers.product.create': {
            class: 'controllers/Product/CreateController',
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
