import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const materialModules = [MatAutocompleteModule, MatFormFieldModule, MatInputModule];

@Component({
    selector: "app-home",
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, FontAwesomeModule, ...materialModules],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss",
    providers: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    myControl = new FormControl("");
    options: string[] = ["One", "Two", "Three"];
    faMagnifyingGlass: IconDefinition = faMagnifyingGlass;

    constructor() {}

    ngOnInit(): void {}
}
