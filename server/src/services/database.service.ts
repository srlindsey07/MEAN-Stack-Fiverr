// External Dependencies
import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
import Logger from '../lib/Logger';

dotenv.config();

interface IOnConnectedCallback {
    (): void
}

export default class MongoConnection {
    private readonly mongoUrl: string;

    private readonly mongoConnectionOptions: ConnectOptions = { 
        retryWrites: true, 
        writeConcern: {w: 'majority'}
    }

    constructor(mongoUrl: string) {
        if (process.env.NODE_ENV === 'dev') {
            mongoose.set('debug', true)
        }

        this.mongoUrl = mongoUrl;
    }

    public connect = (onConnectedCallback: () => void) => {
        Logger.log(`Connecting to database at ${this.mongoUrl}...`)

        mongoose.connect(this.mongoUrl, this.mongoConnectionOptions)
            .then(() => {
                Logger.success('Database connected')
                onConnectedCallback()
            })    
            .catch((error) => {
                Logger.error(`Could not connect to database: ${error}`)
            })
    }

    public close = () => {
        Logger.info('Closing database connection...');
        mongoose.connection.close()
            .then(() => { 
                Logger.info('Connection closed')
                process.exit() 
            })
            .catch((error) => { Logger.error(`Error closing database connection: ${error}`)})
    }
}

