import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Item } from '../item';
import * as products from '../../assets/products/products.json';

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
			transition('void => 1', animate('.2s ease-in')),
		])
	]
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
