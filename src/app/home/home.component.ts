import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    set_bg(val: Number) : void {
        const el = document.getElementById('page-bg')
        if (el)
            el.style.backgroundImage = "url('assets/" + val + ".jpg')";
    }
    go_to_youtube() : void {
        window.location.href='https://www.youtube.com/channel/UCLXanXoT1vqHnqqIF8AZJqw';
    }
}
