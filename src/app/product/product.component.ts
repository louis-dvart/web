import { Component, OnInit, HostListener } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Item } from '../item'
import * as products from '../../assets/products/products.json'
import { BagRuntime } from '../bag/bag.runtime'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product_id!: string
  product!: Item
  option: any
  error: boolean = false

  constructor (
			private route: ActivatedRoute,
			private router: Router,
			private bagRuntime: BagRuntime) { }

  ngOnInit (): void {
    // get route parameters
    this.product_id = String(this.route.snapshot.paramMap.get('pid'))
    for (const p of (products as any).default) {
      if (p.id == this.product_id) { this.product = p }
    }
    if (!this.product) { this.closeModal() }
  }

  public addToBag (item: Item) {
    this.error = !this.option
    if (this.error) return

    this.bagRuntime.addItem(item, this.option, 1)
    this.closeModal()
  }

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
