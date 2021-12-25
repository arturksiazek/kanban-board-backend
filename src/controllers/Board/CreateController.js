const { StatusCodes: HTTP } = require('http-status-codes');

class CreateController {
    /**
     * @param {BoardRepository} boardRepository
     */
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }

    async invoke(req, res) {
        const {
            body: { title, slug }
        } = req;

        const board = this.boardRepository.create({
            id: null,
            title,
            slug
        });

        return res.status(HTTP.CREATED).send(board);
    }
}

module.exports = CreateController;
