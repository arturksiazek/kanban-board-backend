const { StatusCodes: HTTP } = require('http-status-codes');

class UpdateController {
    /**
     * @param {TaskRepository} taskRepository
     */
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async invoke(req, res) {
        const { slug } = req.params;

        let task = await this.taskRepository.findOne({
            where: {
                slug
            }
        });

        task = await task.update({ listId: req.body.task.listId });

        return res.status(HTTP.OK).send(task);
    }
}

module.exports = UpdateController;
