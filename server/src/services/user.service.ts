import { UpdateWriteOpResult } from "mongoose";
import { IUser, User } from "../models/user";
import { DeleteResult } from "mongodb"

export const findAll = async (): Promise<IUser[]> => {
    return await User.find({});
}

export const findById = async (id: string): Promise<IUser | null> => {
    return await User.findById(id);
}

export const create = async (user: IUser): Promise<string> => {
    const newUser = await User.create({...user});
    return newUser._id;
}

export const update = async (id: string, user: IUser): Promise<UpdateWriteOpResult> => {
    return await User.updateOne({ _id: id }, user);
}

export const remove = async (id: string): Promise<DeleteResult> => {
    return await User.deleteOne({ _id: id })
}