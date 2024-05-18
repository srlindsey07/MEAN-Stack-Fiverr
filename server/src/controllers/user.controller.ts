import { DeleteResult } from 'mongodb';
import { Request, Response } from "express";
import { IUser } from "../models/user";
import * as UserService from '../services/user.service'
import { isValidObjectId, UpdateWriteOpResult } from "mongoose";

export const findAll = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await UserService.findAll();

        if (users.length === 0) {
            res.status(204).send(users);
        } else {
            res.status(200).send(users);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const findById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).send('Invalid user ID.')
    }

    try {
        const user = await UserService.findById(id);

        if (!user) {
            res.sendStatus(204);
        } else {
            res.status(200).send(user);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const create = async (req: Request, res: Response) => {
    const newUser: IUser = req.body;

    try {
        const userId: string = await UserService.create(newUser);

        if (!userId) {
            res.status(500).send('Could not create user.');
        } else {
            res.send(userId);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates: IUser = req.body;

    try {
        const result: UpdateWriteOpResult = await UserService.update(id, updates);

        if (result.matchedCount === 0 ) {
            res.status(404).send('User with ID not found.');
        } else if (!result.acknowledged || result.modifiedCount === 0) {
            res.status(500).send('Could not update user.');
        } else {
            res.sendStatus(200);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result: DeleteResult = await UserService.remove(id);

        if (result.deletedCount === 0 || !result.acknowledged) {
            res.status(500).send('Could not delete user.');
        } else {
            res.sendStatus(200);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}