import { computed, inject, Injectable, signal } from "@angular/core";
import { tap } from "rxjs";
import { Category, ICategory } from "./models/category.model";
import { CategoryService } from "./services/category.service";

@Injectable({
    providedIn: "root",
})
export class AppStore {
    private readonly categoryService = inject(CategoryService);

    private state: any = {
        $categories: signal<ICategory[]>([]),
        $activeCategoryId: signal<string>(""),
        $activeCategory: computed((): ICategory => {
            return this.$categories().find((category: ICategory) => category._id === this.$activeCategoryId());
        }),
        // $popular: computed((): IBaseCategory[] => {
        //     const subcategories: ISubcategory[] = this.$activeCategory().subcategories;
        //     let nestedSubcategories: IBaseCategory[] = [];
        //     if (subcategories && subcategories.length > 0) {
        //         subcategories.forEach(sub => nestedSubcategories.push(...sub.nestedSubcategories!));
        //     }
        //     return nestedSubcategories;
        // }),
    };

    // Getters
    public readonly $categories = this.state.$categories.asReadonly();
    public readonly $activeCategoryId = this.state.$activeCategoryId.asReadonly();
    public readonly $activeCategory = this.state.$activeCategory;

    constructor() {}

    // Setters
    setCategories = (categories: Category[]): void => {
        this.state.$categories.set(categories);
    };

    setActiveCategoryId = (categoryId: string): void => {
        this.state.$activeCategoryId.set(categoryId);
    };

    setActiveCategoryBySlug = (slug: string): void => {
        const categoryId: string | undefined = this.$categories().find(
            (category: Category) => category.slug === slug
        )?._id;
        this.setActiveCategoryId(categoryId || "");
    };

    // Helpers
    fetchCategories = () => {
        return this.categoryService.getAll().pipe(tap(categories => this.setCategories(categories)));
    };
}
