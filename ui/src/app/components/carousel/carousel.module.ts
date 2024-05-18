import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { CarouselSlideComponent } from "./carousel-slide/carousel-slide.component";
import { CarouselComponent } from "./carousel/carousel.component";

const materialModules = [MatCardModule, MatButtonModule];
@NgModule({
    imports: [CommonModule, ...materialModules, FontAwesomeModule],
    declarations: [CarouselComponent, CarouselSlideComponent],
    exports: [CarouselComponent, CarouselSlideComponent],
})
export class CarouselModule {}
