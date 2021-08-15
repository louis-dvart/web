import { Component, OnInit } from '@angular/core';
import { Item } from './item/item.component';
import * as products from '../../../assets/products/products.json';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
	shopItems : Item[] = [];

	constructor() { }

	ngOnInit(): void {
		this.loadShopItems();
	}

	loadShopItems() : void {
		for (let p of (products as any).default) {
			this.shopItems.push({
				id: p['id'],
				name: p['name'],
				price:p['price'],
				img:p['img'],
				description: p['description']
			});
		}
	}

}
