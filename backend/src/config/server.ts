import * as http from 'http';
import app from './app';

import logger from '../logger';

const initializeServer = (): http.Server => {
    try {
        const PORT = process.env.PORT || 5000;

        return app.listen(PORT, () =>
            logger.info(`Server running on port: ${PORT}`),
        );
    } catch (e) {
        logger.error(`Error launching server.. ${e}`);
        return e;
    }
};

export default initializeServer;
