const { StatusCodes: HTTP } = require('http-status-codes');

class ShowController {
    /**
     * @param {BoardRepository} boardRepository
     */
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async invoke(req, res) {
        const boards = await this.boardRepository.findAll();

        return res.status(HTTP.OK).send(boards);
    }
}

module.exports = ShowController;
