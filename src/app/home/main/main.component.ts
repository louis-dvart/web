import { Component, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterViewInit {

    constructor(){}

    ngAfterViewInit(): void {
    }

    scrollToShop() : void {
        let shopnav = document.getElementById('shop-nav');

        if (shopnav) {
            const y: number = shopnav.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }
}
