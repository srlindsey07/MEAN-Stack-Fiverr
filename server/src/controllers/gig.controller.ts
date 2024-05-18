import { Request, Response } from "express";
import { IGig } from "../models/gig";
import * as GigService from '../services/gig.service'
import { isValidObjectId, UpdateWriteOpResult } from "mongoose";
import { DeleteResult } from "mongodb";

export const findAll = async (req: Request, res: Response) => {
    try {
        const gigs: IGig[] = await GigService.findAll();

        if (gigs.length === 0) {
            res.sendStatus(204);
        } else {
            res.status(200).send(gigs);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const findById = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
        return res.status(400).send('Invalid gig ID.');
    }

    try {
        const gig = await GigService.findById(id);

        if (!gig) {
            res.sendStatus(204);
        } else {
            res.status(200).send(gig);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const findAllByNestedId = async (req: Request, res: Response) => {
    const { nestedId } = req.params;

    if (!isValidObjectId(nestedId)) {
        return res.status(400).send('Invalid subcategory ID.');
    }

    try {
        const gigs: IGig[] = await GigService.findAllByNestedId(nestedId);

        if (!gigs || gigs.length === 0) {
            res.sendStatus(204);
        } else {
            res.status(200).send(gigs);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const create = async (req: Request, res: Response) => {
    const gig: IGig = req.body;

    try {
        const gigId: string = await GigService.create(gig);

        if (!gigId) {
            res.status(500).send('Could not create gig.');
        } else {
            res.send(gigId);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const updates: IGig = req.body;

    try {
        const result: UpdateWriteOpResult = await GigService.update(id, updates);

        if (result.matchedCount === 0) {
            res.status(404).send('Gig with ID not found.');
        } else if (!result.acknowledged || result.modifiedCount === 0) {
            res.status(500).send('Could not update gig.');
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
        const result: DeleteResult = await GigService.remove(id);

        if (result.deletedCount === 0 || !result.acknowledged) {
            res.status(500).send('Could not delete gig.');
        } else {
            res.sendStatus(200);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}