import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { LicenceDetailComponent } from './licence-detail/licence-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
    SettingsComponent,
    LicenceListComponent,
    LicenceDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
