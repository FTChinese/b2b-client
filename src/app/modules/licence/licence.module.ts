import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenceRoutingModule } from './licence-routing.module';
import { LicenceListComponent } from './licence-list/licence-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LicenceListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LicenceRoutingModule
  ]
})
export class LicenceModule { }
