import { Document, model, Model, Schema } from "mongoose";

export interface ICategoryInfo {
    _id?: Schema.Types.ObjectId;
    name: string;
    slug: string;
    subtitle?: string;
}
export interface ICategory extends ICategoryInfo {
    subcategories: Schema.Types.ObjectId[]; // ref 'Subcategory'
}

export interface ICategoryDocument extends ICategory, Document<Schema.Types.ObjectId> {}
export interface ICategoryModel extends Model<ICategoryDocument> {}

const categorySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: false },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
    subcategories: { type: Array<Schema.Types.ObjectId>, required: true, ref: 'Subcategory' }
}, { versionKey: false });

export const Category: ICategoryModel = model<ICategoryDocument, ICategoryModel>('Category', categorySchema) ;