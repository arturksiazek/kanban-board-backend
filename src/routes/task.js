const express = require('express');
const router = express.Router();

module.exports = di => {
    const showController = di.get('controllers.task.show');
    const createController = di.get('controllers.task.create');
    const updateController = di.get('controllers.task.update');

    router.get('/:slug', (...args) => showController.invoke(...args));
    router.put('/:slug', (...args) => updateController.invoke(...args));
    router.post('/', (...args) => createController.invoke(...args));

    return router;
};
