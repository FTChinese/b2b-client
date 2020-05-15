import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { LicenceDetailComponent } from './licence-detail/licence-detail.component';
import { InvitationComponent } from './invitation/invitation.component';
import { StafferComponent } from './staffer/staffer.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'licences',
    component: LicenceListComponent
  },
  {
    path: 'licences/:id',
    component: LicenceDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'invitations',
    component: InvitationComponent
  },
  {
    path: 'staff',
    component: StafferComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
