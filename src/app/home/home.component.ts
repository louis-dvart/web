import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    private static _current_source: String = 'assets/1.mp4';
    public static get current_source(): String {
        return HomeComponent._current_source;
    }
    public static set current_source(value: String) {
        HomeComponent._current_source = value;
    }

    @ViewChild('videoElement') videoElement!: ElementRef;

    set_bg(val: Number) : void {
        HomeComponent.current_source = "assets/" + val + ".mp4"
        if (! this.videoElement.nativeElement.src.endsWith(HomeComponent.current_source)) {
            this.videoElement.nativeElement.src = HomeComponent.current_source;
            this.videoElement.nativeElement.load();
        }
    }

    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/channel/UCLXanXoT1vqHnqqIF8AZJqw';
    }
}
