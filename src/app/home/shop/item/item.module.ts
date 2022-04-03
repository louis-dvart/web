import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { ItemComponent } from './item.component'

@NgModule({
  imports: [BrowserModule, RouterModule],
  declarations: [ItemComponent],
  bootstrap: [ItemComponent],
  exports: [ItemComponent]
})
export class ItemModule { }
