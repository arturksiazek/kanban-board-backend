'use strict';
const AbstractRepository = require('./AbstractRepository');
const { Project } = require('../models');

class ProjectRepository extends AbstractRepository {
    get model() {
        return Project;
    }
}

module.exports = ProjectRepository;
