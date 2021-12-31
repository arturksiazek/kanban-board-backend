const { StatusCodes: HTTP } = require('http-status-codes');
const { List, Task } = require('../../models');

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
                {
                    association: 'lists',
                    include: [
                        {
                            association: 'tasks',
                            include: [{ association: 'project' }]
                        }
                    ]
                }
            ],
            order: [
                [{ model: List, as: 'lists' }, 'index', 'ASC'],
                [
                    { model: List, as: 'lists' },
                    { model: Task, as: 'tasks' },
                    'index',
                    'ASC'
                ]
            ]
        });

        return res.status(HTTP.OK).send(board);
    }
}

module.exports = ShowController;
