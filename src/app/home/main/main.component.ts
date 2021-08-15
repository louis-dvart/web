import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {
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
