import mongoose, { UpdateWriteOpResult } from "mongoose";
import { Gig, IGig } from "../models/gig";
import { DeleteResult } from "mongodb"

export const findAll = async (): Promise<IGig[]> => {
    return await Gig.find({});
}

export const findById = async (id: string): Promise<IGig | null> => {
    return await Gig.findById(id);
}

export const findAllByNestedId = async (nestedId: string): Promise<IGig[]> => {
    return await Gig.find({ nestedId: new mongoose.Types.ObjectId(nestedId) });
}

export const create = async (gig: IGig): Promise<string> => {
    const newGig: IGig = await Gig.create({...gig});
    return newGig._id;
}

export const update = async (id: string, gig: IGig): Promise<UpdateWriteOpResult> => {
    return await Gig.updateOne({ _id: id }, gig);
}

export const remove = async (id: string): Promise<DeleteResult> => {
    return await Gig.deleteOne({ _id: id });
}