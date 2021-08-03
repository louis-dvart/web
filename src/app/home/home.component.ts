import { Component, AfterViewInit, HostListener, ElementRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
    isScrollArrowShown: boolean = false;
    isSideMenuOpen: boolean = false;

    constructor(private elem: ElementRef){}

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

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/watch?v=A2Keszteelg&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy';
    }
}
