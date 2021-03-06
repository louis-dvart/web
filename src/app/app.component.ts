import { Component, HostListener, OnDestroy, OnInit } from '@angular/core'
import { BagRuntime } from './bag/bag.runtime'
import { SubscriptionManager } from './bag/subscription-manager'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'dvart-web'

  isSideMenuOpen: boolean = false
  isScrollArrowShown: boolean = false

  item_count: number = 0

  constructor (
    private subscriptions: SubscriptionManager,
    private bagRuntime: BagRuntime) {
    this.subscriptions = new SubscriptionManager()
  };

  ngOnDestroy () : void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit (): void {
    this.subscriptions.add(
      this.bagRuntime.getItems().subscribe(
        (items) => {
          this.item_count = items.reduce((prev, curr) => prev + curr.count, 0)
          // this.item_count = items.length;
        }
      )
    )
  }

  toggleSideMenu () : void {
    this.isSideMenuOpen = !this.isSideMenuOpen
  }

  scrollToShop () : void {
    const shopnav = document.getElementById('shop-nav')

    if (shopnav) {
      const y: number = shopnav.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  scrollToAbout () : void {
    const aboutnav = document.getElementById('about-nav')

    if (aboutnav) {
      const y: number = aboutnav.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  scrollToTop () : void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  go_to_youtube () : void {
    window.location.href = 'https://www.youtube.com/watch?v=7mO_RojGrb4&list=PLJipLc0D7d9ReZYUE4QTzbLtfx6Kxz6yy&index=1'
  }

  @HostListener('window:scroll')
  onWindowScroll (): void {
    this.isScrollArrowShown = !(window.innerHeight + window.scrollY === this.getDocumentHeight())
  }

    // helper function to get the correct document height
    getDocumentHeight () : number {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      )
    }
}
