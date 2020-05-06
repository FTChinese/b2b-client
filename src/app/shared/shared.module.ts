import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicControlComponent,
    DynamicFormComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicControlComponent,
    DynamicFormComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
