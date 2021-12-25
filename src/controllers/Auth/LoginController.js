const bcrypt = require('bcrypt');
const { StatusCodes: HTTP } = require('http-status-codes');
const { User } = require('../../models');

class LoginController {
    async invoke(req, res) {
        const {
            session,
            body: { email, password }
        } = req;

        const user = await User.findOne({
            attributes: ['email', 'password'],
            where: {
                email
            }
        });

        if (!user) {
            return res.sendStatus(HTTP.UNAUTHORIZED);
        }

        //Salt - 10 (rounds)
        const passwordValid = await bcrypt.compare(password, user.password);

        if (!passwordValid) {
            return res.sendStatus(HTTP.UNAUTHORIZED);
        }

        const loggedUser = await User.findOne({
            where: {
                email
            },
            include: [
                {
                    association: 'role',
                    required: true
                }
            ]
        });

        session.loggedUser = loggedUser;

        return res.send(loggedUser);
    }
}

module.exports = LoginController;
