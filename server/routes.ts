import { Request, Response, Router } from "express";
import * as SubcategoriesController from './src/controllers/subcategory.controller'
import * as CategoriesController from './src/controllers/category.controller'
import * as UsersController from './src/controllers/user.controller'
import * as GigsController from './src/controllers/gig.controller';

export const router = Router()

// Health Check
router.get('/health-check', (req: Request, res: Response) => res.status(200).json({ healthy: true }));

// Category Routes
router.get('/subcategories', [SubcategoriesController.findAll]) // get all subcategories
router.get('/subcategories/:categoryId', [SubcategoriesController.findAllByCategoryId]) // get subcategories by category id
router.get('/categories', [CategoriesController.findAll]) // get all categories

// User Routes
router.get('/users', [UsersController.findAll]) // get all users
router.get('/users/:id', [UsersController.findById]) // get user by id
router.post('/users', [UsersController.create]) // add new user
router.put('/users/:id', [UsersController.update]) // update user by id
router.delete('/users/:id', [UsersController.remove]) // delete user by id

// Gig Routes
router.get('/gigs', [GigsController.findAll]) // get all gigs
router.get('/gigs/:id', [GigsController.findById]) // get gig by id
router.get('/gigs?category=:nestedId', [GigsController.findAllByNestedId]) // get gig by nested subcategory id
router.post('/gigs', [GigsController.create]) // add new gig
router.put('/gigs/:id', [GigsController.update]) // update gig by id
router.delete('/gigs/:id', [GigsController.remove]) // delete gig by id