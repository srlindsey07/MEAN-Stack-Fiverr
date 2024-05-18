import { Document, model, Model, Schema } from "mongoose";
import { ICategoryInfo } from "./category";

export interface ISubcategory extends ICategoryInfo {
    nestedSubcategories: Schema.Types.ObjectId[]; // ref 'NestedSubcategory'
    imageUrl: string;
}

export interface ISubcategoryDocument extends ISubcategory, Document<Schema.Types.ObjectId> {}
export interface ISubcategoryModel extends Model<ISubcategoryDocument> {}

const subcategorySchema = new Schema({
     _id: { type: Schema.Types.ObjectId, required: false },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },    
    nestedSubcategories: { type: Array<Schema.Types.ObjectId>, required: false , ref: 'Nestedsubcategory'},
    imageUrl: { type: String, required: true }
}, { versionKey: false });

export const Subcategory: ISubcategoryModel = model<ISubcategoryDocument, ISubcategoryModel>('Subcategory', subcategorySchema);