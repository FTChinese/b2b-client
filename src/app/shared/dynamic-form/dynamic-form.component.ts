import { Component, OnInit, Input } from '@angular/core';
import { DynamicControl } from '../control';
import { FormGroup } from '@angular/forms';
import { ControlService } from '../control.service';
import { FormService } from '../form.service';
import { Button } from '../button';

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

  form: FormGroup;

  constructor(
    private controlService: ControlService,
    private formService: FormService,
  ) { }

  ngOnInit(): void {
    // Turn the dynamic controls to a FormGroup.
    this.form = this.controlService.toFormGroup(this.controls);
    // Host could publish error message received from API.
    this.formService.errorReceived$.subscribe(reqErr => {
      console.log(reqErr);
    });
  }

  // Pass form data to host.
  onSubmit() {
    const data = JSON.stringify(this.form.getRawValue());
    console.log(data);
    this.formService.submit(data);
  }

  // Set validation error received from API
  // to corresponding field.
  setError() {
    console.log('Setting error manually');
    this.controls.forEach(ctrl => {
      this.form.get(ctrl.key).setErrors({
        already_exists: 'The same value already exists. Please use another one'
      });
    });
  }
}
