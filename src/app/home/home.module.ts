
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ShopModule } from './shop/shop.module';
import { MainComponent } from './main/main.component';

@NgModule({
	imports: [ BrowserModule, ShopModule ],
	declarations: [ HomeComponent, MainComponent ],
	bootstrap: [ HomeComponent ],
	exports: [ HomeComponent ]
})
export class HomeModule { }
