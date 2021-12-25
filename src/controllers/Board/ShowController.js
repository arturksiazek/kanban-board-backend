const { StatusCodes: HTTP } = require('http-status-codes');

class ShowController {
    /**
     * @param {BoardRepository} boardRepository
     */
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async invoke(req, res) {
        const { slug } = req.params;
        const board = await this.boardRepository.findOne({
            where: {
                slug
            },
            include: [
                { association: 'tasks', include: [{ association: 'project' }] }
            ]
        });

        return res.status(HTTP.OK).send(board);
    }
}

module.exports = ShowController;
