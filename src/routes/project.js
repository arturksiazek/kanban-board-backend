const express = require('express');
const router = express.Router();

module.exports = di => {
    const indexController = di.get('controllers.project.index');

    router.get('/:boardId', (...args) => indexController.invoke(...args));

    return router;
};
