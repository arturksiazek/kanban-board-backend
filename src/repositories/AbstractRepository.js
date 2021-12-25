'use strict';

class AbstractRepository {
    constructor(db) {
        this.db = db;
    }

    findById(id, options = {}) {
        return this.model.findByPk(id, options);
    }

    findOne(options = {}) {
        return this.model.findOne(options);
    }

    findAll(options = {}) {
        return this.model.findAll(options);
    }

    findAndCountAll(options = {}) {
        return this.model.findAndCountAll(options);
    }

    count(options = {}) {
        return this.model.count(options);
    }

    delete(options = {}) {
        return this.model.destroy(options);
    }

    update(data, options = {}) {
        return this.model.update(data, options);
    }

    create(data, options) {
        return this.model.create(data, options);
    }

    bulkCreate(items = []) {
        return this.model.bulkCreate(items);
    }
}

module.exports = AbstractRepository;
