import { Component, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    scrollFlag: boolean = false;

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
        if ((window.innerHeight - window.pageYOffset) / window.innerHeight < .25)
            this.scrollFlag = false;
        else
            this.scrollFlag = true;
    }

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/watch?v=A2Keszteelg&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy';
    }
}
