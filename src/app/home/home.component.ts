import { Component, ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    current_video_element: number = 0;
    video_elements: HTMLVideoElement[] = [];

    constructor(private elem: ElementRef){}

    ngAfterViewInit(): void {
        this.video_elements = this.elem.nativeElement.querySelectorAll('.videos');
        for (const elem of this.video_elements) {
            elem.pause();
        }
    }

    set_bg(val: number) : void {
        if (val == this.current_video_element + 1)
            return; // skip

        this.video_elements[this.current_video_element].classList.remove('display-video');
        this.video_elements[this.current_video_element].pause();
        this.current_video_element = val - 1;
        this.video_elements[this.current_video_element].classList.add('display-video');
        this.video_elements[this.current_video_element].play();
    }

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/watch?v=A2Keszteelg&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy';
    }
}
