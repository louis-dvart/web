import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as products from '../../assets/products/products.json';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    product_id!: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        // get route parameters
        this.product_id = String(this.route.snapshot.paramMap.get('pid'));
    }
}
