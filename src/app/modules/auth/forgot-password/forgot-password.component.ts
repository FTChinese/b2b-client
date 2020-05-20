import { Component, OnInit } from '@angular/core';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/widget/button';
import { AuthService } from 'src/app/core/service/auth.service';
import { Email } from 'src/app/data/schema/form-data';
import { sitemap } from 'src/app/layout/sitemap';
import { RequestError } from 'src/app/data/schema/request-result';
import { FormService } from 'src/app/shared/service/form.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [FormService],
})
export class ForgotPasswordComponent implements OnInit {

  dynamicControls: DynamicControl[] = [
    new InputControl({
      value: '',
      key: 'email',
      validators: [Validators.required, Validators.email, Validators.maxLength(64)],
      label: '邮箱',
      placeholder: 'name@example.org',
      type: 'email',
      desc: '请输入您的电子邮箱，我们会向该邮箱发送邮件，帮您重置密码',
    }),
  ];

  button: Button = Button.primary().setBlock().setName('发送邮件');

  // Indicates whether email is sent.
  done = false;
  loginLink = `/${sitemap.login}`;

  apiErrors: RequestError;

  constructor(
    private authService: AuthService,
    private formService: FormService,
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$.pipe(
      switchMap(data => {
        const formData: Email = JSON.parse(data);
        console.log(formData);

        return of(true);
      })
    )
    .subscribe({
      next: ok => {
        this.done = ok;
      },
      error: err => {
        this.formService.sendError(err);
      }
    });
  }
}
