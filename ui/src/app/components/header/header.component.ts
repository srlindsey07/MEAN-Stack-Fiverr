import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../models/category.model";
import { AppStore } from "../../app.store";
import { Router, RouterModule } from "@angular/router";

const materialModules = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
];

@Component({
    selector: "app-header",
    standalone: true,
    imports: [...materialModules, FontAwesomeModule, RouterModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly appStore = inject(AppStore);
    private router = inject(Router);
    categories = input.required<Category[]>();

    faAngleDown: IconDefinition = faAngleDown;
    faAngleUp: IconDefinition = faAngleUp;

    constructor() {}

    navigateToCategoryPage(category: Category): void {
        this.router.navigate(["categories", category.slug]);
    }
}
