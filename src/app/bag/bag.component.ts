import { Component, OnInit, HostListener, OnDestroy } from '@angular/core'
import { Router } from '@angular/router'
import { trigger, state, style, transition, animate } from '@angular/animations'
import { Item } from '../item'
import { SubscriptionManager } from './subscription-manager'
import { BagRuntime } from './bag.runtime'

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({
        transform: 'scaleY(0)'
      })),
      state('true', style({
        transform: 'scaleY(1)'
      })),
      transition('1 => 0', animate('.2s ease-out')),
      transition('void => 1', animate('.2s ease-in'))
    ])
  ]
})
export class BagComponent implements OnInit, OnDestroy {
  public items: { item: Item, options: string, count: number }[]
  public subtotal: number = 0

  constructor (
      private router: Router,
      private subscriptions: SubscriptionManager,
      private bagRuntime: BagRuntime) {
    this.items = []
    this.subscriptions = new SubscriptionManager()
  }

  ngOnDestroy () : void {
    this.subscriptions.unsubscribe()
  }

  ngOnInit (): void {
    this.subscriptions.add(
      this.bagRuntime.getItems().subscribe(
        (items) => {
          this.items = items
          this.subtotal = this.bagRuntime.getSubtotal(items)
        }
      )
    )
  }

  removeItem (item: Item) : void {
    this.bagRuntime.removeItem(item.id)
  }

  // MODAL METHODS

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey (event: KeyboardEvent) {
    if (event.key === 'Escape') this.closeModal()
  }

  public closeModal () : void {
    this.router.navigate(
      ['/', { outlets: { view: null } }]
    )
  }
}
