const express = require('express');
const router = express.Router();

module.exports = di => {
    const indexController = di.get('controllers.product.index');
    const createController = di.get('controllers.product.create');

    router.get('/', (...args) => indexController.invoke(...args));
    router.post('/', (...args) => createController.invoke(...args));

    return router;
};
