import { Document, model, Model, Schema } from "mongoose";
import { ICategoryInfo } from "./category";

export interface INestedSubcategory extends ICategoryInfo {}

export interface INestedSubcategoryDocument extends INestedSubcategory, Document<Schema.Types.ObjectId> {}
export interface INestedSubcategoryModel extends Model<INestedSubcategoryDocument> {}

const nestedSubcategorySchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: false },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    subtitle: { type: String, required: false },
}, { versionKey: false });

export const NestedSubcategory: INestedSubcategoryModel = model<INestedSubcategoryDocument, INestedSubcategoryModel>('Nestedsubcategory', nestedSubcategorySchema);