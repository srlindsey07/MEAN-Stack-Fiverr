import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    inject,
    Input,
    QueryList,
    Renderer2,
    ViewChild,
} from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { CarouselSlideComponent } from "../carousel-slide/carousel-slide.component";

@Component({
    selector: "app-carousel",
    standalone: false,
    templateUrl: "./carousel.component.html",
    styleUrl: "./carousel.component.scss",
})
export class CarouselComponent implements AfterContentInit, AfterViewInit {
    @Input({ required: true }) id!: string;
    @ViewChild("track") sliderTrack!: ElementRef;
    @ViewChild("container") container!: ElementRef;
    @ContentChildren(CarouselSlideComponent) slideEl!: QueryList<CarouselSlideComponent>;

    private renderer = inject(Renderer2);

    prevBtnEnabled = false;
    nextBtnEnabled = true;
    faAngleLeft: IconDefinition = faAngleLeft;
    faAngleRight: IconDefinition = faAngleRight;

    slides!: CarouselSlideComponent[];

    ngAfterContentInit(): void {
        this.slides = this.slideEl.toArray();
    }

    ngAfterViewInit(): void {}

    // Move the slide track RIGHT to the first card in the next set of cards that fit inside container
    prev(): void {
        const trackBounds = this.sliderTrack.nativeElement.getBoundingClientRect();
        const prevSlide: HTMLElement | undefined = this.findPrevSlide();

        if (!!prevSlide) {
            const prevSlideLeftBound = prevSlide.getBoundingClientRect().left;
            const newXposition = (prevSlideLeftBound - trackBounds.left) * -1;
            this.renderer.setStyle(this.sliderTrack.nativeElement, "transform", `translateX(${newXposition}px)`);
        }
    }

    // Move the slide track LEFT to the first card in the next set of cards that fit inside container
    next(): void {
        const trackBounds = this.sliderTrack.nativeElement.getBoundingClientRect();
        const nextSlide: HTMLElement | undefined = this.findNextSlide();

        if (!!nextSlide) {
            const nextSlideBounds = nextSlide?.getBoundingClientRect();
            const xMovement = (nextSlideBounds!.left - trackBounds.left) * -1;
            this.renderer.setStyle(this.sliderTrack.nativeElement, "transform", `translateX(${xMovement}px)`);
        }
    }

    updateButtonStates(): void {
        this.nextBtnEnabled = !!this.findNextSlide();
        this.prevBtnEnabled = !!this.findPrevSlide();
    }

    // Find the first slide fully within the determined left most boundary,
    // but not including the first child if it's already first in container
    findPrevSlide(): HTMLElement | undefined {
        const containerBounds: DOMRect = this.container.nativeElement.getBoundingClientRect();
        const childSlides: Array<HTMLElement> = Array.from(this.sliderTrack.nativeElement.children);

        const leftMostX = containerBounds.left - containerBounds.width;

        // if first slide is at first slide position return undefined
        if (childSlides[0].getBoundingClientRect().left === containerBounds.left) {
            return;
        }

        return childSlides.find(slide => {
            const slideBounds = slide.getBoundingClientRect();
            const notFirstVisible = slideBounds.left !== containerBounds.left;
            const isWithinLeftMostX = slideBounds.left >= leftMostX;

            return notFirstVisible && isWithinLeftMostX;
        });
    }

    // Finds the last visible (fully or partially) slide within the container
    findNextSlide(): HTMLElement | undefined {
        const containerBounds = this.container.nativeElement.getBoundingClientRect();
        const childSlides: Array<HTMLElement> = Array.from(this.sliderTrack.nativeElement.children);

        return childSlides.find((slide, i) => {
            const slideBounds = slide.getBoundingClientRect();
            return slideBounds.right > containerBounds.right;
        });
    }
}
