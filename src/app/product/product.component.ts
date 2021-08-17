import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as products from '../../assets/products/products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    product_id!: string;

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
    }
}

