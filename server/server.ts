import dotenv from 'dotenv';
import MongoConnection from './src/services/database.service';
import Logger from './src/lib/Logger';
import { app } from './app';

dotenv.config();
const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const mongoConnection = new MongoConnection(`${DB_URL}/${DB_NAME}`)

if (!DB_URL || !DB_NAME) {
    Logger.error('Invalid database connection details')
} else {
    mongoConnection.connect(() => { 
        app.listen(PORT, () => {
            Logger.success(`Server started at http://localhost:${PORT}`);
        }).on('error', (error) => { throw new Error(error.message) });
    })
}

process.on('SIGINT', () => {
    Logger.info('Shutting down server')
    mongoConnection.close()
})
