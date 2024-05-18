import mongoose from 'mongoose';
import { ISubcategory, Subcategory } from '../models/subcategory';

export const findAll = async (): Promise<ISubcategory[]> => {
    const subcategories = await Subcategory.find({}).populate('nestedsubcategories');

    if (!subcategories) {
        return [];
    }
    return subcategories;
}

export const findAllByCategoryId = async(categoryId: string): Promise<ISubcategory[]> => {
    return await Subcategory.find({ categoryId: new mongoose.Types.ObjectId(categoryId) });
}