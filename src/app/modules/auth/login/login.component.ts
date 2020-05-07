import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/service/form.service';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/widget/button';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { Credentials } from 'src/app/data/schema/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormService]
})
export class LoginComponent implements OnInit {

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
  ];

  button: Button = Button.primary().setName('登录');

  constructor(
    private formService: FormService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$.subscribe(data => {
      console.log(data);
      const credentials: Credentials = JSON.parse(data);
      this.login(credentials);
    });
  }

  private login(c: Credentials) {
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
