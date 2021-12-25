'use strict';
const AbstractRepository = require('./AbstractRepository');
const { Task } = require('../models');

class TaskRepository extends AbstractRepository {
    get model() {
        return Task;
    }
}

module.exports = TaskRepository;
