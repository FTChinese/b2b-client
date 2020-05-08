import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenceListComponent } from './licence-list/licence-list.component';


const routes: Routes = [
  {
    path: '',
    component: LicenceListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenceRoutingModule { }
