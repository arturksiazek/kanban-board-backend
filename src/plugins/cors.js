const cors = require('cors');
const config = require('../config');

module.exports = app => {
    const originsWhitelist = [config.app.url, config.app.frontendUrl];
    const corsOptions = {
        origin(origin, callback) {
            if (originsWhitelist.includes(origin) || !origin) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
        exposedHeaders: ['cluid', 'xsrf-token', 'version']
    };

    app.use(cors(corsOptions));
};
