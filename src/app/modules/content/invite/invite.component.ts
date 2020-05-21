import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';
import { Validators } from '@angular/forms';
import { InputControl, DynamicControl } from 'src/app/shared/widget/control';
import { Button } from 'src/app/shared/widget/button';
import { Invite } from 'src/app/data/schema/form-data';
import { RequestError } from 'src/app/data/schema/request-result';
import { FormService } from 'src/app/shared/service/form.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ModalService } from 'src/app/shared/service/modal.service';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  providers: [FormService],
})
export class InviteComponent implements OnInit {

  @Input() licence: Licence;

  dynamicControls: DynamicControl[] = [
    new InputControl({
      value: '',
      key: 'email',
      validators: [Validators.required, Validators.email, Validators.maxLength(64)],
      label: '许可使用者邮箱',
      placeholder: 'name@example.org',
      type: 'email',
      desc: '必填，我们将发送邮件给该邮箱，接收者点击邮件中的链接即获取该订阅许可的使用权'
    }),
    new InputControl({
      value: null,
      key: 'description',
      validators: [Validators.maxLength(512)],
      label: '备注',
      type: 'text',
      desc: '可选，仅供您日后参考'
    }),
  ];

  button: Button = Button.primary().setName('发送');

  constructor(
    private formService: FormService,
    private modalService: ModalService,
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$.pipe(
      switchMap(data => {
        const invite: Omit<Invite, 'licenceId'> = JSON.parse(data);

        console.log(invite);

        return of(true);
      })
    )
    .subscribe({
      next: ok => {
        console.log(ok);
      },
      error: err => {
        console.log(err);
        this.formService.sendError(RequestError.fromResponse(err));
      }
    });
  }

  close() {
    this.modalService.close();
  }
}
