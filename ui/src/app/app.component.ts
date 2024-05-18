import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
    Signal,
} from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { AppStore } from "./app.store";
import { Category } from "./models/category.model";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, RouterModule],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
    providers: [AppStore],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    private appStore = inject(AppStore);

    categories: Signal<Category[]> = this.appStore.$categories;

    title = "Sixerr.";

    constructor() {
        this.appStore.fetchCategories().subscribe();
    }

    ngOnInit(): void {}
}
