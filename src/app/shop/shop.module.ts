import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShopComponent } from './shop.component';
import { ItemComponent } from './item/item.component';

@NgModule({
	imports: [ BrowserModule ],
	declarations: [ ShopComponent , ItemComponent ],
	bootstrap: [ ShopComponent ],
	exports: [ ShopComponent ]
})
export class ShopModule { }
