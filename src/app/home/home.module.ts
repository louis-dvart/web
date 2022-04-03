
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { HomeComponent } from './home.component'
import { LandingComponent } from './landing/landing.component'
import { ShopModule } from './shop/shop.module'

@NgModule({
  imports: [BrowserModule, ShopModule],
  declarations: [HomeComponent, LandingComponent],
  bootstrap: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
