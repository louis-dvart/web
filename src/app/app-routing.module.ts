import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { BagComponent } from './bag/bag.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'product/:pid',
		outlet: 'view',
		component: ProductComponent,
	},
	{
		path: 'bag',
		outlet: 'view',
		component: BagComponent,
	},
	{ path: '**', component: HomeComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(
		routes, {
			useHash: true,
			anchorScrolling: "enabled",
		})],
		exports: [RouterModule]
})
export class AppRoutingModule { }
