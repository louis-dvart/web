import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    set_music() : void {
        const el = document.getElementById('page-bg')
        if (el)
            el.style.backgroundImage = "url('assets/1.png')";
    }

    set_clips() : void {
        const el = document.getElementById('page-bg')
        if (el)
            el.style.backgroundImage = "url('assets/2.png')";
    }

    set_store() : void {
        const el = document.getElementById('page-bg')
        if (el)
            el.style.backgroundImage = "url('assets/3.png')";
    }

    set_about() : void {
        const el = document.getElementById('page-bg')
        if (el)
            el.style.backgroundImage = "url('assets/4.png')";
    }

}
