import { Component, OnInit, Input } from '@angular/core';

export interface Item {
	name : string;
	img : string;
	description : string;
	price : string;
}

@Component({
	selector: 'shop-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
	@Input() item!: Item;

	constructor() { }

	ngOnInit(): void { }

}
