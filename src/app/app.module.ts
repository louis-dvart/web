import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProductComponent } from './product/product.component';
import { BagComponent } from './bag/bag.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        BagComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
