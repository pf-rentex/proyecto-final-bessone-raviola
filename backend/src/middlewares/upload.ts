import { GridFsStorage } from 'multer-gridfs-storage';
import crypto from 'crypto';
import multer from 'multer';
import path from 'path';
import Grid from 'gridfs-stream';
import mongoose from 'mongoose';

// Init gridFS for filemanagement
const db = process.env.DATABASE_URL;

const conn = mongoose.createConnection(db);
let gfs;
conn.once('open', () => {
    // Init stream
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
    url: process.env.DATABASE_URL,
    file: (req, file) => {
        if (!req.body.bucketName) {
            throw new Error('Must specify bucket name');
        }
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename =
                    buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: req.body.bucketName,
                };
                return resolve(fileInfo);
            });
        });
    },
});

const upload = multer({ storage, limits: { fieldSize: 25 * 1024 * 1024 } });

export default upload;
