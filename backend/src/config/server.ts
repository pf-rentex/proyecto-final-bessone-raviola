import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import router from '../routes';

const initializeServer = () => {
    try {
        const app = express();
        dotenv.config();

        app.use(cors());
        app.use(bodyParser.json({ limit: '20mb' }));
        app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

        app.use(router);

        const PORT = process.env.PORT || 5000;

        const server = app.listen(PORT, () =>
            console.log(`Server running on port: ${PORT}`),
        );

        return { app, server };
    } catch (e) {
        console.error(`Error launching server.. ${e}`);
    }
};

export default initializeServer;
