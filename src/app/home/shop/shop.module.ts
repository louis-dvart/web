import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ShopComponent } from './shop.component'
import { ItemModule } from './item/item.module'

@NgModule({
  imports: [BrowserModule, ItemModule],
  declarations: [ShopComponent],
  bootstrap: [ShopComponent],
  exports: [ShopComponent]
})
export class ShopModule { }
