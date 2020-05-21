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
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { LayoutComponent } from './layout/layout.component';
import { TeamFormComponent } from './team-form/team-form.component';
import { HomeComponent } from './home/home.component';
import { RevokeInvitationComponent } from './revoke-invitation/revoke-invitation.component';
import { RevokeLicenceComponent } from './revoke-licence/revoke-licence.component';


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
    CheckoutComponent,
    CustomerServiceComponent,
    LayoutComponent,
    TeamFormComponent,
    HomeComponent,
    RevokeInvitationComponent,
    RevokeLicenceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
