import express, { NextFunction, Request, Response } from 'express';
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import Logger from "./src/lib/Logger";
import { router as appRoutes} from './routes'

const _app = express();

const CORS_OPTIONS: CorsOptions = {
    methods: ['PUT', 'POST', 'PATCH', 'DELETE', 'GET'], // Access-Control-Allow-Methods
    allowedHeaders: ['Origin', 'X-Requested-with', 'Content-Type', 'Accept', 'Authorization'] // Access-Control-Allow-Methods
};

_app.use(cors(CORS_OPTIONS));
_app.use(morgan('dev'))
_app.use(express.json()); // Content-Type - application/json
_app.use(express.urlencoded({ extended: true })); // Content-Type - charset=utf-8

// API ROUTES
_app.use('/api', appRoutes);

// API ERROR HANDLING
_app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('not found');
    Logger.error(error);
    return res.status(404).json({message: error.message})
})

export const app = _app; 