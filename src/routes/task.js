const express = require('express');
const router = express.Router();

module.exports = di => {
    const indexController = di.get('controllers.task.index');
    const createController = di.get('controllers.task.create');

    router.get('/', (...args) => indexController.invoke(...args));
    router.post('/', (...args) => createController.invoke(...args));

    return router;
};
