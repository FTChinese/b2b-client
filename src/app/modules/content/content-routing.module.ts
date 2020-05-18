import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { LicenceDetailComponent } from './licence-detail/licence-detail.component';
import { InvitationComponent } from './invitation/invitation.component';
import { StafferComponent } from './staffer/staffer.component';
import { CartComponent } from './cart/cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CheckoutComponent } from './checkout/checkout.component';


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
    path: 'cart/checkout',
    component: CheckoutComponent
  },
  {
    path: 'invitations',
    component: InvitationComponent
  },
  {
    path: 'transactions',
    component: TransactionComponent
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
