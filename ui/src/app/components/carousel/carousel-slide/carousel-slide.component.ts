import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
    selector: "app-carousel-slide",
    standalone: false,
    templateUrl: "./carousel-slide.component.html",
    styleUrl: "./carousel-slide.component.scss",
})
export class CarouselSlideComponent {
    @ViewChild(TemplateRef) template!: TemplateRef<any>;
}
