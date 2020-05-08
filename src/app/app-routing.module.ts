import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './modules/auth/reset-password/reset-password.component';
import { HomeComponent } from './modules/home/home/home.component';
import { JumboLayoutComponent } from './layout/jumbo-layout/jumbo-layout.component';
import { TeamGuard } from './core/guard/team.guard';
import { ProductsComponent } from './modules/home/products/products.component';
import { LicenceModule } from './modules/licence/licence.module';
import { SettingModule } from './modules/setting/setting.module';

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
    canActivate: [AuthGuard],
    component: ContentLayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'licences',
        loadChildren: () => LicenceModule
      },
      {
        path: 'settings',
        loadChildren: () => SettingModule,
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'forgot-password/:token',
        component: ResetPasswordComponent
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  {
    path: '**',
    component: JumboLayoutComponent,
    children: [
      {
        path: '',
        component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
