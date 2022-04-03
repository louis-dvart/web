import { Component, Input } from '@angular/core'
import { Item } from '../../../item'

@Component({
  selector: 'app-shop-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item!: Item

  constructor () { }
}
