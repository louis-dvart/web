import { Component, OnInit } from '@angular/core';
import { Item } from './item/item.component';

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
		this.shopItems = [
			{
				name: "corrente ",
				price:"2 ADA",
				img:"assets/products/chain/cover.jpg",
				description: ""
			},
			{
				name: "shirt",
				price:"2 ADA",
				img:"assets/products/shirt/cover.jpeg",
				description: ""
			},
			{
				name: "corrente ",
				price:"2 ada",
				img:"assets/products/chain/cover.jpg",
				description: ""
			},
			{
				name: "corrente ",
				price:"2 ada",
				img:"assets/products/chain/cover.jpg",
				description: ""
			},
			{
				name: "corrente ",
				price:"2 ADA",
				img:"assets/products/chain/cover.jpg",
				description: ""
			},
			{
				name: "shirt",
				price:"2 ADA",
				img:"assets/products/shirt/cover.jpeg",
				description: ""
			},
			{
				name: "shirt",
				price:"2 ADA",
				img:"assets/products/shirt/cover.jpeg",
				description: ""
			},
		]
	}

}
