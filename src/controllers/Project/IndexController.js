const { StatusCodes: HTTP } = require('http-status-codes');
const { Project } = require('../../models');

class IndexController {
    /**
     * @param {ProjectRepository} projectRepository
     */
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }

    async invoke(req, res) {
        const { boardId } = req.params;

        const board = await this.projectRepository.findAll({
            where: {
                boardId
            },
            order: [
                ['index', 'ASC'],
            ]
        });

        return res.status(HTTP.OK).send(board);
    }
}

module.exports = IndexController;
