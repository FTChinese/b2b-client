import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InputControl, DynamicControl } from 'src/app/shared/widget/control';
import { Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PwResetForm, ResettingPassword } from 'src/app/data/schema/form-data';
import { sitemap } from 'src/app/layout/sitemap';
import { Button } from 'src/app/shared/widget/button';
import { RequestError } from 'src/app/data/schema/request-result';
import { FormService } from 'src/app/shared/service/form.service';

enum TokenState {
  NotFound = 'not_found',
  Found = 'found',
  Used = 'used'
}

/**
 * @description Page to verify password reseting token
 * and let user to enter new password.
 * This page is in one of the three states:
 * 1. Token not found - lead user back to login or forgot password page.
 * 2. Token found - show password resetting form.
 * 3. Password reset successfully - hide the form and show success message.
 */
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [FormService]
})
export class ResetPasswordComponent implements OnInit {

  dynamicControls: DynamicControl[] = [
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

  button: Button = Button.primary().setBlock().setName('重置密码');

  tokenState: TokenState = null;
  token: string; // The token acquired from url path.
  email: string; // The email linked to this password reset token.

  forgotPwLink = `/${sitemap.forgotPassword}`;
  loginLink = `/${sitemap.login}`;

  apiErrors: RequestError;

  constructor(
    private route: ActivatedRoute,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const token = params.get('token');
        // Used later when submitting form data.
        this.token = token;
        console.log(`Token: $token`);
        // @todo: send actual http request.
        return of({email: 'mock@example.org'});
      })
    ).subscribe({
      next: data => {
        this.email = data.email;
        this.tokenState = TokenState.Found;
      },
      error: err => console.log(err),
    });

    this.formService.formSubmitted$.pipe(
      switchMap(data => {
        const formData: PwResetForm = JSON.parse(data);
        const rp: ResettingPassword = {
          token: this.token,
          password: formData.password
        };
        console.log(rp);
        return of(true);
      })
    )
    .subscribe({
      next: ok => {
        this.tokenState = TokenState.Used;
      },
      error: err => {
        this.formService.sendError(RequestError.fromResponse(err));
      }
    });
  }

  onSubmitted(data: string) {



  }
}
