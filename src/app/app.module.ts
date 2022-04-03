import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'
import { ProductComponent } from './product/product.component'
import { BagComponent } from './bag/bag.component'
import { SubscriptionManager } from './bag/subscription-manager'
import { FormsModule } from '@angular/forms'
import { CheckoutComponent } from './checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BagComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
    SubscriptionManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
