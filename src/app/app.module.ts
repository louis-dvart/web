import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ProductComponent } from './product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
