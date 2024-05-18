import Logger from '../lib/Logger';
import { NestedSubcategory } from '../models/nested-subcategory';
import { Subcategory } from '../models/subcategory';
import { Category } from '../models/category';
import { User } from '../models/user';
import { Gig } from '../models/gig';
import MongoConnection from '../services/database.service';
import { seedCategories, seedGigs, seedUsers } from './data';

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const mongoConnection = new MongoConnection(`${DB_URL}/${DB_NAME}`)

if (!DB_URL || !DB_NAME) {
    Logger.error('Invalid database connection details')
} else {
    mongoConnection.connect(async () => { 
        Promise.all([
            await dropCollections()
                .catch((error: any) => {
                    Logger.error(`Error dropping collections: ${error}`);
                }),
            await seedDatabase()
                .catch((error: any) => {
                    Logger.error(`Failed to seed database: ${error}`);
                })
        ]).finally(() => mongoConnection.close())
    });
}

async function seedDatabase() {
    try {
        await seedCategories();
        await seedUsers();
        await seedGigs();
    } catch(error: any) {
        throw new Error(error.message)
    }
}


async function dropCollections() {
    try {
        await Category.collection.drop()
            .catch((error: any) => { throw new Error(`Could not drop categories collection: ${error}`) });

        await Subcategory.collection.drop()
            .catch((error: any) => { throw new Error(`Could not drop subcategories collection: ${error}`) });

        await NestedSubcategory.collection.drop()
            .catch((error: any) => { throw new Error(`Could not drop nested subcategories collection: ${error}`)});

        await User.collection.drop()
            .catch((error: any) => { throw new Error(`Could not drop users collection: ${error}`) });

        await Gig.collection.drop()
            .catch((error: any) => { throw new Error(`Could not drop gigs collection: ${error}`)});
    } catch (error: any) {
        throw new Error(error.message);
    }
}