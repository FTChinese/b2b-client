import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ForgotPasswordComponent } from './modules/auth/forgot-password/forgot-password.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthGuard } from './core/guard/auth.guard';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [AuthGuard]
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
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
