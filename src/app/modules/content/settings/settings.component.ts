import { Component, OnInit } from '@angular/core';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Button } from 'src/app/shared/widget/button';
import { Validators } from '@angular/forms';
import { RequestError } from 'src/app/data/schema/request-result';
import { Team, PwChangeForm } from 'src/app/data/schema/form-data';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  teamControls: DynamicControl[];
  passwordControls: DynamicControl[] = [
    new InputControl({
      value: '',
      key: 'oldPassword',
      validators: [Validators.required],
      label: '旧密码',
      type: 'password',
    }),
    new InputControl({
      value: '',
      key: 'password',
      validators: [Validators.required],
      label: '新密码',
      type: 'password'
    }),
    new InputControl({
      value: '',
      key: 'confirmPassword',
      validators: [Validators.required],
      label: '确认密码',
      type: 'password',
    }),
  ];

  button: Button = Button.primary().setName('保存');

  teamErrors: RequestError;
  pwErrors: RequestError;

  constructor(
  ) { }

  ngOnInit(): void {
    this.teamControls = [
      new InputControl({
        value: '',
        key: 'name',
        validators: [Validators.required, Validators.maxLength(64)],
        label: '名称',
        placeholder: '',
        type: 'text',
        desc: '必填。出现在您给机构成员发送的邀请函中，不必与发票抬头相同'
      }),
      new InputControl({
        value: null,
        key: 'invoiceTitle',
        validators: [Validators.maxLength(128)],
        label: '发票抬头',
        type: 'text',
        desc: '选填。仅出现在发票凭证上，可稍候在设置中修改'
      }),
    ];
  }

  onChangeTeam(data: string) {
    const team: Team = JSON.parse(data);

    console.log(team);
  }

  onChangePassword(data: string) {
    const formData: PwChangeForm  = JSON.parse(data);

    console.log(formData);
  }
}
