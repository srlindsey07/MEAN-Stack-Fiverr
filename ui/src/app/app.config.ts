import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHttpClient } from "@angular/common/http";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { routes } from "./app.routes";

const FORM_FIELD_OPTIONS = {
    appearance: "outline",
    floatLabel: "never",
};

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideAnimationsAsync(),
        provideHttpClient(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: { ...FORM_FIELD_OPTIONS },
        },
    ],
};
