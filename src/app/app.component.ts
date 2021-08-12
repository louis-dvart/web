import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dvart-web';

    isSideMenuOpen: boolean = false;

    constructor(private elem: ElementRef){}

    toogleSideMenu(event : any) : void {
        this.isSideMenuOpen = ! this.isSideMenuOpen;
        if (this.isSideMenuOpen) {
            this.elem.nativeElement.querySelectorAll('.side-navbar')[0].classList.add('open');
            this.elem.nativeElement.querySelectorAll('.side-navbar-scrim')[0].classList.add('open');
        } else {
            this.elem.nativeElement.querySelectorAll('.side-navbar')[0].classList.remove('open')
            this.elem.nativeElement.querySelectorAll('.side-navbar-scrim')[0].classList.remove('open')
        }
    }

    scrollTo(el : HTMLElement) {
        const y: number = el.getBoundingClientRect().top + window.pageYOffset;
        console.log(y);
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/watch?v=A2Keszteelg&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy';
    }
}
