import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [HomeComponent, ProductsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
