const { StatusCodes: HTTP } = require('http-status-codes');

class CreateController {
    /**
     * @param {TaskRepository} taskRepository
     */
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async invoke(req, res) {
        const {
            body: { title, description, boardId, referenceId }
        } = req;

        const task = this.taskRepository.create({
            id: null,
            title,
            description,
            boardId,
            referenceId
        });

        return res.status(HTTP.CREATED).send(task);
    }
}

module.exports = CreateController;
