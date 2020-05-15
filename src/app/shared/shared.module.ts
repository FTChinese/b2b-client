import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditionPipe } from './pipes/edition.pipe';
import { CyclePipe } from './pipes/cycle.pipe';
import { ButtonDirective } from './directive/button.directive';

@NgModule({
  declarations: [
    DynamicControlComponent,
    DynamicFormComponent,
    EditionPipe,
    CyclePipe,
    ButtonDirective,
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
  ]
})
export class SharedModule { }
