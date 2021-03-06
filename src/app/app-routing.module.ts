import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { JumboLayoutComponent } from './layout/jumbo-layout/jumbo-layout.component';
import { TeamGuard } from './core/guard/team.guard';
import { AuthModule } from './modules/auth/auth.module';
import { ContentModule } from './modules/content/content.module';
import { HomeComponent } from './modules/content/home/home.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: JumboLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [TeamGuard],
        component: HomeComponent
      }
    ]
  },
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => ContentModule
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => AuthModule
      }
    ]
  },
  {
    path: '',
    component: JumboLayoutComponent,
    children: [
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true, relativeLinkResolution: 'legacy' }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
