import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dvart-web';

    isSideMenuOpen: boolean = false;

    constructor(){}

    toggleSideMenu() : void {
        this.isSideMenuOpen = ! this.isSideMenuOpen;
    }

    scrollToShop() : void {
        let shopnav = document.getElementById('shop-nav');

        if (shopnav) {
            const y: number = shopnav.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

    scrollToTop() : void{
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/watch?v=A2Keszteelg&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy';
    }
}
