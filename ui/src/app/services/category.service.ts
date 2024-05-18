import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category.model";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn: "root",
})
export class CategoryService {
    private readonly http: HttpClient = inject(HttpClient);
    private readonly baseUrl = environment.apiUrl;
    private readonly categoriesApi = `${this.baseUrl}/categories`;

    constructor() {}

    getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoriesApi);
    }
}
