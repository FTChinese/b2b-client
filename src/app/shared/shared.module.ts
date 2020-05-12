import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    DynamicControlComponent,
    DynamicFormComponent,
    ButtonComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicControlComponent,
    DynamicFormComponent,
    ButtonComponent,
    CartComponent,
  ]
})
export class SharedModule { }
