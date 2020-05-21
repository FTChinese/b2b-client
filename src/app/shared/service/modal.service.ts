import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private backdropElm: HTMLElement;
  private clsName = 'modal-open';
  private closedSource = new Subject<boolean>();

  closed$ = this.closedSource.asObservable();

  constructor() { }

  open() {
    document.body.classList.add(this.clsName);
    if (!this.backdropElm) {
      this.createBackdrop();
    }

    document.body.appendChild(this.backdropElm);
  }

  close() {
    document.body.classList.remove(this.clsName);
    document.body.removeChild(this.backdropElm);
    this.closedSource.next(true);
  }

  private createBackdrop() {
    const div = document.createElement('div');
    div.className = 'modal-backdrop fade show';

    this.backdropElm = div;
  }
}
