const express = require('express');
const router = express.Router();

module.exports = di => {
    const showController = di.get('controllers.board.show');
    const createController = di.get('controllers.board.create');

    router.get('/:slug', (...args) => showController.invoke(...args));
    router.post('/', (...args) => createController.invoke(...args));

    return router;
};
