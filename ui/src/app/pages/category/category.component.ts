import { ChangeDetectionStrategy, Component, computed, inject, OnInit, Signal } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { AppStore } from "../../app.store";
import { CarouselModule } from "../../components/carousel/carousel.module";
import { IBaseCategory } from "../../models/category.model";
import { ISubcategory } from "../../models/subcategory.model";

const materialModules = [MatCardModule, MatListModule];

@Component({
    selector: "app-category",
    standalone: true,
    imports: [...materialModules, CarouselModule, FontAwesomeModule],
    templateUrl: "./category.component.html",
    styleUrl: "./category.component.scss",
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {
    private readonly appStore = inject(AppStore);
    private readonly activatedRoute = inject(ActivatedRoute);

    faArrowRightLong: IconDefinition = faArrowRightLong;

    $activeCategory = this.appStore.$activeCategory;
    // computed signals are not updated until
    // 1. the dependent signal(s) is updated
    // 2. AND the computed signal is read <----
    $popular: Signal<IBaseCategory[]> = computed((): IBaseCategory[] => {
        const subcategories: ISubcategory[] = this.$activeCategory().subcategories;
        // let popularItems: IBaseCategory[] = [];

        // if (subcategories && subcategories.length > 0) {
        //     // get all nested subcategories
        //     let nestedSubcategories: IBaseCategory[] = [];
        //     subcategories.forEach(sub => nestedSubcategories.push(...sub.nestedSubcategories!));

        //     // randomly select 10 as the "popular" items
        //     while (popularItems.length < 20) {
        //         const rdmIndex = Math.floor(Math.random() * nestedSubcategories.length + 1);
        //         const rdmItem = nestedSubcategories[rdmIndex];
        //         if (!popularItems.includes(rdmItem)) {
        //             popularItems.push(rdmItem);
        //         }
        //     }
        // }
        // return popularItems;
        return subcategories.slice(0, 20);
    });

    constructor() {
        this.activatedRoute.url.subscribe((url: UrlSegment[]) => {
            const categorySlug = url[1].toString();
            this.appStore.setActiveCategoryBySlug(categorySlug);
        });
    }

    ngOnInit(): void {}
}
