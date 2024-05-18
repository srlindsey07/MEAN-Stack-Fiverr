import { Routes } from "@angular/router";

export enum AppPaths {
    HOME = "",
    CATEGORIES = "categories/",
}
export const routes: Routes = [
    {
        path: `${AppPaths.CATEGORIES}:slug`,
        loadComponent: () =>
            import("./pages/category/category.component").then(
                m => m.CategoryComponent
            ),
    },
    {
        path: "",
        pathMatch: "full",
        loadComponent: () =>
            import("./pages/home/home.component").then(m => m.HomeComponent),
    },
];
