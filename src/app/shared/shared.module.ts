import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditionPipe } from './pipes/edition.pipe';
import { CyclePipe } from './pipes/cycle.pipe';
import { ButtonDirective } from './directive/button.directive';
import { InvitationStatusPipe } from './pipes/invitation-status.pipe';

@NgModule({
  declarations: [
    DynamicControlComponent,
    DynamicFormComponent,
    EditionPipe,
    CyclePipe,
    ButtonDirective,
    InvitationStatusPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicControlComponent,
    DynamicFormComponent,
    EditionPipe,
    CyclePipe,
    InvitationStatusPipe,
  ]
})
export class SharedModule { }
