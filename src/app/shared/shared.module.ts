import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditionPipe } from './pipes/edition.pipe';
import { CyclePipe } from './pipes/cycle.pipe';

@NgModule({
  declarations: [
    DynamicControlComponent,
    DynamicFormComponent,
    ButtonComponent,
    EditionPipe,
    CyclePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicControlComponent,
    DynamicFormComponent,
    ButtonComponent,
    EditionPipe,
    CyclePipe,
  ]
})
export class SharedModule { }
