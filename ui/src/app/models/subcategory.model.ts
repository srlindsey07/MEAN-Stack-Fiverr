import { BaseCategory, IBaseCategory } from "./category.model";

export interface ISubcategory extends IBaseCategory {
    nestedSubcategories?: IBaseCategory[];
    imageUrl: string;
}

export class Subcategory extends BaseCategory {
    nestedSubcategories?: IBaseCategory[];
    imageUrl: string;

    constructor(subcategory: ISubcategory) {
        super(subcategory);

        this.nestedSubcategories = subcategory?.nestedSubcategories ?? [];
        this.imageUrl = subcategory.imageUrl;
    }
}
