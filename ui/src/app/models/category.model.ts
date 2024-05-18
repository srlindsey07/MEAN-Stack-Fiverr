import { ISubcategory } from "./subcategory.model";

// BASE CATEGORY
export interface IBaseCategory {
    _id?: string;
    name: string;
    slug: string;
    subtitle?: string;
}
export class BaseCategory implements IBaseCategory {
    _id: string;
    name: string;
    slug: string;
    subtitle?: string;

    // constructor();
    constructor(category: IBaseCategory) {
        // constructor(category?: IBaseCategory) {
        this._id = category?._id ?? "";
        this.name = category?.name ?? "";
        this.slug = category?.slug ?? "";
        this.subtitle = category?.subtitle ?? "";
    }
}

// TOP-LEVEL CATEGORY
export interface ICategory extends IBaseCategory {
    subcategories: ISubcategory[];
}
export class Category extends BaseCategory {
    subcategories: ISubcategory[];

    // constructor();
    constructor(category: ICategory) {
        // constructor(category?: ICategory) {
        // if (!!category) {
        super(category);
        // } else {
        //     super();
        // }

        this.subcategories = category?.subcategories ?? [];
    }
}
