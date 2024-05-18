import { NestedSubcategory } from "../models/nested-subcategory";
import { Category, ICategory } from "../models/category"

export const findAll = async (): Promise<ICategory[]> => {
    const categories = await Category.find({})
    .sort({index: 1})
    .populate({
        path: 'subcategories',
        populate: {
            path: 'nestedSubcategories',
            model: NestedSubcategory
        }
    });

    if (!categories) {
        return [];
    }
    return categories; 
}