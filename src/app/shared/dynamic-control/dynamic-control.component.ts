import { Component, OnInit, Input } from '@angular/core';
import { DynamicControl } from '../widget/control';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent implements OnInit {

  @Input() control: DynamicControl;
  @Input() form: FormGroup;

  // The current FormControl instance.
  get formControl(): AbstractControl {
    return this.form.get(this.control.key);
  }

  get isInvalid(): boolean {
    return this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
  }

  constructor() { }

  ngOnInit(): void {
  }

  // {
  //   min?: {
  //     min: number,
  //     actual: number
  //   };
  //   max?: {
  //     max: number,
  //     actual: number
  //   };
  //   required?: true;
  //   email?: true;
  //   minLength?: {
  //     requiredLength: number,
  //     acutualLength: number
  //   };
  //   maxLength?: {
  //     requiredLength: number,
  //     acutualLength: number
  //   };
  //   pattern?: {
  //     requiredPattern: string,
  //     actualValue: string
  //   };
  // API response errors:
  //   minssing: string,
  //   missing_field: string,
  //   invalid: string,
  //   already_exists: string,
  // }
  get errMsg(): string {
    const errors = this.formControl.errors;

    console.log(errors);

    if (errors.required) {
      return `${this.control.label}为必填项`;
    }

    if (errors.email) {
      return '请输入有效的邮箱地址';
    }

    if (errors.min) {
      return '数值过小';
    }

    if (errors.max) {
      return '数值过高';
    }

    if (errors.minLength) {
      return '输入的内容过短';
    }

    if (errors.maxLength) {
      return '输入的内容过长';
    }

    if (errors.pattern) {
      return '输入不匹配';
    }

    if (errors.missing) {
      return '您所请求的资源不存在';
    }

    if (errors.missing_field) {
      return `${this.control.label}为必填项`;
    }

    if (errors.invalid) {
      return errors.invalid;
    }

    if (errors.already_exists) {
      return `该${this.control.label}已经存在`;
    }

    return '';
  }
}
