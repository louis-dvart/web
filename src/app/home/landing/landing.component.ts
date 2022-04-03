import { Component,  } from '@angular/core'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  constructor () {}

  scrollToShop () : void {
    const shopnav = document.getElementById('shop-nav')

    if (shopnav) {
      const y: number = shopnav.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}
