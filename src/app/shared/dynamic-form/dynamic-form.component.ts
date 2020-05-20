import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DynamicControl } from '../widget/control';
import { FormGroup } from '@angular/forms';
import { ControlService } from '../service/control.service';
// import { FormService } from '../service/form.service';
import { Button } from '../widget/button';
import { RequestError } from 'src/app/data/schema/request-result';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [ControlService]
})
export class DynamicFormComponent implements OnInit {

  // Host should pass in an array of DynamicControl.
  @Input() controls: DynamicControl[] = [];
  @Input() button: Button;
  @Output() submitted = new EventEmitter<string>();
  @Input()
  set errors(err: RequestError) {
    this.setError(err);
  }

  form: FormGroup;

  constructor(
    private controlService: ControlService,
  ) { }

  ngOnInit(): void {
    // Turn the dynamic controls to a FormGroup.
    this.form = this.controlService.toFormGroup(this.controls);

    // Host could publish validation errors received from API.
    // Server-side validation aborts early on first error, so
    // there is only one field if it exists.
    // this.formService.errorReceived$.subscribe(err => {
    //   this.setError(err);
    // });
  }

  // Submit form data to host.
  onSubmit() {
    const data = JSON.stringify(this.form.getRawValue());
    // this.formService.submit(data);
    this.submitted.emit(data);
    // Disable the form upon submission.
    this.form.disable();
  }

  // Set validation errors received from API
  // to corresponding field.
  private setError(err: RequestError) {
    console.log('Setting error manually');
    // Enable it in case of server-side errors.
    this.form.enable();
    if (!err.unprocessable) {
      return;
    }

    // Use the Unprocessable#field to find which field goes wrong.
    // Use the Unprocessable#code as ValidationErrors' key,
    // and API error response message as fallback error message.
    this.form.get(err.unprocessable.field).setErrors({
      [err.unprocessable.code]: err.message
    });
  }
}
