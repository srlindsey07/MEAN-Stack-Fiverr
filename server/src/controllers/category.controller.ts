import { ICategory } from "../models/category"
import {Request, Response} from 'express';
import * as CategoryService from '../services/category.service'

export const findAll = async (req: Request, res: Response) => {
    try {
        const categories: ICategory[] = await CategoryService.findAll();

        if (categories.length === 0) {
            res.status(204).send(categories);
        } else {
            res.status(200).send(categories);
        }
    } catch (error: any) {
        res.status(500).send(error.message)
    }
}
