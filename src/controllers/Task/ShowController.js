const { StatusCodes: HTTP } = require('http-status-codes');

class ShowController {
    /**
     * @param {TaskRepository} taskRepository
     */
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }

    async invoke(req, res) {
        const { slug } = req.params;
        const task = await this.taskRepository.findOne({
            where: {
                slug
            },
            include: [
                {
                    association: 'project'
                },
                {
                    association: 'list'
                }
            ]
        });

        return res.status(HTTP.OK).send(task);
    }
}

module.exports = ShowController;
