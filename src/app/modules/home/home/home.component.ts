import { Component, OnInit } from '@angular/core';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Validators } from '@angular/forms';
import { Button } from 'src/app/shared/widget/button';
import { FormService } from 'src/app/shared/service/form.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { switchMap } from 'rxjs/operators';
import { Team } from 'src/app/data/schema/form-data';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [FormService],
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

  constructor(
    private authService: AuthService,
    private formService: FormService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$.pipe(
      switchMap(data => {
        const formData: Team = JSON.parse(data);

        return of(formData);
      })
    )
    .subscribe({
      next: data => {
        this.authService.createTeam(data);
        this.router.navigate(['/products']);
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
