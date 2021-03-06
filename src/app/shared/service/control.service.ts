import { Injectable } from '@angular/core';
import { DynamicControl } from '../widget/control';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

/**
 * @description ControlService build a FormGroup based on
 * a list of DynamicControl definitions.
 */
@Injectable()
export class ControlService {

  toFormGroup(configs: DynamicControl[]) {
    const group: {[key: string]: AbstractControl} = {};

    configs.forEach(config => {
      group[config.key] = config.validators
        ? new FormControl(config.value, config.validators)
        : new FormControl(config.value);
    });

    return new FormGroup(group);
  }
}
