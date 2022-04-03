import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isScrollArrowShown: boolean = false

  constructor () {}

    @HostListener('window:scroll', ['$event']) scrollEvent () {
    this.setScrollFlag()
  }

    @HostListener('window:resize', ['$event']) resizeEvent () {
      this.setScrollFlag()
    }

    setScrollFlag () : void {
      this.isScrollArrowShown = !((window.innerHeight - window.pageYOffset) / window.innerHeight < 0.25)
    }
}
