import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Button } from '../widget/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() button: Button;
  @Input() disabled: boolean;
  @HostBinding('class.btn-block') blockHost = false;

  ngOnInit(): void {
    this.blockHost = this.button.isBlock();
  }
}
