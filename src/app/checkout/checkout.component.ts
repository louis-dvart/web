import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BagRuntime} from '../bag/bag.runtime';
import {SubscriptionManager} from '../bag/subscription-manager';
import {Item} from '../item';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

	public items: { item: Item, options: string, count: number }[];
	public subtotal: number = 0;

	constructor(
			private router: Router,
			private subscriptions: SubscriptionManager,
			private bagRuntime: BagRuntime){
		this.items = [];
		this.subscriptions = new SubscriptionManager();
	}

	ngOnDestroy() : void {
		this.subscriptions.unsubscribe();
	}

	ngOnInit(): void {
		this.subscriptions.add(
			this.bagRuntime.getItems().subscribe(
				(items) => {
					this.items = items;
					this.subtotal = this.bagRuntime.getSubtotal(items);
				}
			)
		);
	}


	// MODAL METHODS

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
