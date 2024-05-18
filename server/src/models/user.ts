
// External dependencies
import { Document, model, Model, Schema } from "mongoose";

// Schema
export interface IUser extends Document {
    fullName: {
        firstName: string,
        lastName: string
    },
    username: string,
    title: string,
    about: string,
    portfolioUrls?: string[],
    profileImageUrl?: string[],
    favoritedSellerId?: Schema.Types.ObjectId[],
}

export interface IUserModel extends Model<IUser> {}

const schema = new Schema({
    fullName: { 
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
     },
    username: { type: String, required: true },
    title: { type: String, required: true },
    about: { type: String, required: true },
    portfolioUrls: { type: [String], required: false },
    profileImageUrl: { type: [String], required: false },
    favoritedSellerIds: { type: [Schema.Types.ObjectId], required: false }
}, { versionKey: false })

export const User: IUserModel = model<IUser, IUserModel>('User', schema)