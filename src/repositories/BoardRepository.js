'use strict';
const AbstractRepository = require('./AbstractRepository');
const { Board } = require('../models');

class BoardRepository extends AbstractRepository {
    get model() {
        return Board;
    }
}

module.exports = BoardRepository;
