import { Component, OnInit } from '@angular/core';
import { FormService } from 'src/app/shared/form.service';
import { DynamicControl, InputControl } from 'src/app/shared/control';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/button';

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
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$.subscribe(data => {
      console.log(data);
    });
  }

}
