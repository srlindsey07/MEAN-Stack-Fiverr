import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { Observable } from "rxjs";
import { Subcategory } from "../models/subcategory.model";

@Injectable({
    providedIn: "root",
})
export class SubcategoryService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly baseUrl = environment.apiUrl;
    private readonly subcategoriesApi = `${this.baseUrl}/subcategories`;

    constructor() {}

    getAllByCategoryId(categoryId: string): Observable<Subcategory[]> {
        return this.http.get<Subcategory[]>(
            `${this.subcategoriesApi}/${categoryId}`
        );
    }
}
