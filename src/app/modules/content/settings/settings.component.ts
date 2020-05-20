import { Component, OnInit } from '@angular/core';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Button } from 'src/app/shared/widget/button';
import { Validators } from '@angular/forms';
import { RequestError } from 'src/app/data/schema/request-result';
import { Team, PwChangeForm } from 'src/app/data/schema/form-data';
import { AuthService } from 'src/app/core/service/auth.service';
import { FormService } from 'src/app/shared/service/form.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [FormService]
})
export class SettingsComponent implements OnInit {

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
  team: Team;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.team = this.authService.team;
    console.log(this.team);
  }

  onTeamChanged(data: string) {
    const team: Team = JSON.parse(data);

    console.log(team);

    this.authService.updateTeam(team);
  }

  onChangePassword(data: string) {
    const formData: PwChangeForm  = JSON.parse(data);

    console.log(formData);
  }
}
