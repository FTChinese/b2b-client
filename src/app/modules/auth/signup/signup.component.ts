import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/service/form.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { SignUp, Credentials } from 'src/app/data/schema/form-data';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/widget/button';
import { sitemap } from 'src/app/layout/sitemap';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [FormService],
})
export class SignupComponent implements OnInit {

  dynamicControls: DynamicControl[] = [
    new InputControl({
      value: '',
      key: 'email',
      validators: [Validators.required, Validators.email, Validators.maxLength(64)],
      label: '邮箱',
      placeholder: 'name@example.org',
      type: 'email',
    }),
    new InputControl({
      value: '',
      key: 'password',
      validators: [Validators.required],
      label: '密码',
      type: 'password',
    }),
    new InputControl({
      value: '',
      key: 'confirmPassword',
      validators: [Validators.required],
      label: '确认密码',
      type: 'password',
    }),
  ];

  button: Button = Button.primary().setBlock().setName('注册');

  pwResetLink = `/${sitemap.forgotPassword}`;
  signUpLink = `/${sitemap.signUp}`;

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$.subscribe(data => {
      console.log(data);
      const signUp: SignUp = JSON.parse(data);
      this.signUp({
        email: signUp.email,
        password: signUp.password,
      });
    });
  }

  private signUp(c: Credentials) {
    this.authService.login(c);

    if (this.authService.isLoggedIn) {
      const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/';

      const navigationExtras: NavigationExtras = {
        queryParamsHandling: 'preserve',
        preserveFragment: true,
      };

      this.router.navigateByUrl(redirect, navigationExtras);
    }
  }
}
