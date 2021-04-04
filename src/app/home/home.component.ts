import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
    ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }

    set_bg(val: Number) : void {
        const el = document.getElementById('page-bg')
        if (el)
            el.style.backgroundImage = "url('assets/" + val + ".png')";
    }
}
