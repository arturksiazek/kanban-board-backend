const { StatusCodes: HTTP } = require('http-status-codes');

class IndexController {
    /**
     * @param {BoardRepository} boardRepository
     */
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async invoke(req, res) {
        const tasks = await this.boardRepository.findAll();

        return res.status(HTTP.OK).send(tasks);
    }
}

module.exports = IndexController;
