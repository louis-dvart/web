import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item';
import * as products from '../../assets/products/products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    product_id!: string;
    product!: Item;

    private router: Router;

    constructor(private route: ActivatedRoute, router: Router) {
        this.router = router;
    }

    public closeModal() : void {
        this.router.navigate(
            [ "/", { outlets: { modal: null } } ]
        );
    }

    ngOnInit(): void {
        // get route parameters
        this.product_id = String(this.route.snapshot.paramMap.get('pid'));
        for (let p of (products as any).default)
            if (p.id == this.product_id)
                this.product = p;
        console.log(this.product);

        if (! this.product)
            this.closeModal();
    }
}

