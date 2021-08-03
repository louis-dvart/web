import { Component, AfterViewInit, HostListener} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
    isScrollArrowShown: boolean = false;

    constructor(){}

    ngAfterViewInit(): void {
    }

    @HostListener('window:scroll', ['$event']) scrollEvent() {
        this.setScrollFlag();
    }

    @HostListener('window:resize', ['$event']) resizeEvent() {
        this.setScrollFlag();
    }

    setScrollFlag() : void {
        this.isScrollArrowShown = !((window.innerHeight - window.pageYOffset) / window.innerHeight < .25)
    }

}
