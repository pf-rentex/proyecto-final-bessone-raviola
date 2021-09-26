import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from 'cors';
import users from '../routes/api/users';
import auth from '../routes/api/auth';


const initializeServer = () => {

  try {
    const app = express();
    dotenv.config();

    app.use(cors());
    app.use(bodyParser.json({limit: '20mb'}));
    app.use(bodyParser.urlencoded({limit: '20mb', extended: true}));

    app.use('/api/users', users);
    app.use('/api/auth', auth);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

  } catch (e) {
    console.error(`Error launching server.. ${e}`);
  }
}

export default initializeServer;
