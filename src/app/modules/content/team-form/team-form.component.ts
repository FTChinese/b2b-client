import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormService } from 'src/app/shared/service/form.service';
import { Button } from 'src/app/shared/widget/button';
import { Validators } from '@angular/forms';
import { DynamicControl, InputControl } from 'src/app/shared/widget/control';
import { Team } from 'src/app/data/schema/form-data';
import { RequestError } from 'src/app/data/schema/request-result';


@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
  providers: [FormService]
})
export class TeamFormComponent implements OnInit {

  @Input() team: Team = {
    name: '',
    invoiceTitle: null
  };

  @Input()
  set errors(err: RequestError) {
    if (!err) {
      return;
    }

    this.formService.sendError(err);
  }

  @Input() button: Button;
  @Output() saved = new EventEmitter<Team>();

  dynamicControls: DynamicControl[];

  constructor(
    private formService: FormService,
  ) { }

  ngOnInit(): void {
    this.formService.formSubmitted$
      .subscribe( data => {
        const formData: Team = JSON.parse(data);
        this.saved.emit(formData);
      });

    this.dynamicControls =  [
      new InputControl({
        value: this.team.name,
        key: 'name',
        validators: [Validators.required, Validators.maxLength(64)],
        label: '名称',
        placeholder: '',
        type: 'text',
        desc: '必填。出现在您给机构成员发送的邀请函中，不必与发票抬头相同'
      }),
      new InputControl({
        value: this.team.invoiceTitle,
        key: 'invoiceTitle',
        validators: [Validators.maxLength(128)],
        label: '发票抬头',
        type: 'text',
        desc: '选填。仅在开发票时使用'
      }),
    ];
  }
}
