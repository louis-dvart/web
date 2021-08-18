import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item';
import * as products from '../../assets/products/products.json';

@Component({
	selector: 'app-bag',
	templateUrl: './bag.component.html',
	styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {

	private router: Router;

	constructor(router: Router) {
		this.router = router;
	}

	ngOnInit(): void {
	}

	@HostListener('document:keydown.escape', ['$event'])
	handleEscapeKey(event: KeyboardEvent) {
		if (event.key === "Escape") this.closeModal();
	}

	public closeModal() : void {
		this.router.navigate(
			[ "/", { outlets: { view: null } } ]
		);
	}
}
