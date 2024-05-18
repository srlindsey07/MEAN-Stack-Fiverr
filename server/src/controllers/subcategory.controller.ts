import { ISubcategory } from "../models/subcategory";
import { Request, Response } from "express";
import { isValidObjectId } from 'mongoose';
import * as SubcategoryService from '../services/subcategory.service'

export const findAll = async (req: Request, res: Response) => {
    try {
        const subcategories: ISubcategory[] = await SubcategoryService.findAll();

        if (subcategories.length === 0) {
            res.sendStatus(204);
        } else {
            res.status(200).send(subcategories);
        }
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}

export const findAllByCategoryId = async (req: Request, res: Response) => {
    const { categoryId } = req.params;

    if (!isValidObjectId(categoryId)) {
        return res.status(400).send('Invalid category ID.');
    }

    try {
        const subcategories = await SubcategoryService.findAllByCategoryId(categoryId);

        if (!subcategories || subcategories.length === 0) {
            res.status(204).send(subcategories);
        } else {
            res.status(200).send(subcategories);
        }
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}