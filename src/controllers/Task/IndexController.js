const { StatusCodes: HTTP } = require('http-status-codes');

class IndexController {
    /**
     * @param {TaskRepository} taskRepository
     */
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async invoke(req, res) {
        const tasks = await this.taskRepository.findAll();

        return res.status(HTTP.OK).send(tasks);
    }
}

module.exports = IndexController;
