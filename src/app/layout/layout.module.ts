import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JumboLayoutComponent } from './jumbo-layout/jumbo-layout.component';

@NgModule({
  declarations: [
    AuthLayoutComponent,
    ContentLayoutComponent,
    FooterComponent,
    NavComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    JumboLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class LayoutModule { }
