import dotenv from "dotenv";
import initServer from './@kernel/server';
import initMongoose from './@kernel/mongoose';

dotenv.config();
initServer();
initMongoose()

