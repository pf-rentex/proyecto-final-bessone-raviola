import mongoUnit from 'mongo-unit';
import initializeServer from '../config/server';
import db from '../config/database';

const prepareEnvironment = async () => {
    console.log('Entering here....');

    console.log('Creating mongodb test...');
    const mongoUrl = await mongoUnit.start();
    console.log({ mongoUrl });
    process.env.DATABASE_URL = `${mongoUrl}test`;
    await db();
    await initializeServer();
    console.log('Mocked db server started test...');
};

export default prepareEnvironment;
