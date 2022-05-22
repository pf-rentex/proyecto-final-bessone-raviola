import mongoose from 'mongoose';
import logger from '../logger';

export default async () => {
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}`);
        logger.info('MongoDB Connected..');
    } catch (e) {
        logger.error(`Error connecting with MongoDB, ${e}`);
    }
};
