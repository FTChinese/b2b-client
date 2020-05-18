import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { LicenceDetailComponent } from './licence-detail/licence-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InvitationComponent } from './invitation/invitation.component';
import { StafferComponent } from './staffer/staffer.component';
import { CartComponent } from './cart/cart.component';
import { TransactionComponent } from './transaction/transaction.component';
import { InviteComponent } from './invite/invite.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    ProductsComponent,
    SettingsComponent,
    LicenceListComponent,
    LicenceDetailComponent,
    InvitationComponent,
    StafferComponent,
    CartComponent,
    TransactionComponent,
    InviteComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
