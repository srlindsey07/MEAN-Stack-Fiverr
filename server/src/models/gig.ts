import { Document, model, Model, Schema, Date } from "mongoose";

// Schema
export interface IGig extends Document {
    title: string;
    description: string;
    imageUrls: string[];
    sellerId: Schema.Types.ObjectId;
    nestedId: Schema.Types.ObjectId;
    publishDate: Date;
    clicks: Number;
}

export interface IGigModel extends Model<IGig> {}

const schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrls: { type: [String], required: true },
    sellerId: { type: Schema.Types.ObjectId, ref: 'User' },
    nestedId: { type: Schema.Types.ObjectId, ref: 'NestedSubcategory' },
    publishDate: { type: Date, required: true },
    clicks: { type: Number, required: true, default: 0 }
}, { versionKey: false })

export const Gig: IGigModel = model<IGig, IGigModel>('Gig', schema)