const express = require('express');
const router = express.Router();

module.exports = di => {
    const loginController = di.get('controllers.auth.login');
    const logoutController = di.get('controllers.auth.logout');

    router.get('/login', (...args) => loginController.invoke(...args));
    router.post('/logout', (...args) => logoutController.invoke(...args));

    return router;
};
