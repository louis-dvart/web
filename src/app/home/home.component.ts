import { Component, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    video_elements: HTMLVideoElement[] = [];

    constructor(private elem: ElementRef){}

    ngAfterViewInit(): void {
        // this.video_elements = this.elem.nativeElement.querySelectorAll('.videos');
        // for (const elem of this.video_elements) {
        //     elem.pause();
        // }
    }

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/watch?v=A2Keszteelg&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy';
    }
}
