import { Component, OnInit } from '@angular/core';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/widget/button';
import { AuthService } from 'src/app/core/service/auth.service';
import { Team } from 'src/app/data/schema/form-data';
import { Router } from '@angular/router';
import { sitemap } from 'src/app/layout/sitemap';
import { RequestError } from 'src/app/data/schema/request-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  dynamicControls: DynamicControl[] = [
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

  button: Button = Button.primary().setBlock().setName('保存');

  apiErrors: RequestError;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmitted(data: string) {
    const formData: Team = JSON.parse(data);
    this.authService.createTeam(formData);
    this.router.navigate([`/${sitemap.products}`]);
  }
}
