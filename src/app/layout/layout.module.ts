import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AuthLayoutComponent,
    ContentLayoutComponent
  ]
})
export class LayoutModule { }
