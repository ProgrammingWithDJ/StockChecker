import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocklistComponent } from './stocklist/stocklist.component';
import { StockdetailComponent } from './stockdetail/stockdetail.component';

const routes: Routes = [
  {path: '',redirectTo: 'stock-list', pathMatch: 'full'},
  {path:'stock-list', component: StocklistComponent},
  {path: 'stock-details/:id', component:StockdetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
