import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RequestError } from '../data/schema/request-result';

/**
 * @description FormService is used to pass data to host
 * or receive error message from host.
 */
@Injectable()
export class FormService {

  private formSubmittedSource = new Subject<string>();
  private errorsSource = new Subject<RequestError>();

  formSubmitted$ = this.formSubmittedSource.asObservable();
  errorReceived$ = this.errorsSource.asObservable();

  // Pass form data to parent host.
  submit(data: string) {
    this.formSubmittedSource.next(data);
  }

  // Parent host send error messages to form.
  sendError(err: RequestError) {
    this.errorsSource.next(err);
  }
}
