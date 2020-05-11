import { Component, OnInit } from '@angular/core';
import { staff } from 'src/app/data/mock';

@Component({
  selector: 'app-staffer',
  templateUrl: './staffer.component.html',
  styleUrls: ['./staffer.component.scss']
})
export class StafferComponent implements OnInit {

  readonly staff = staff;

  constructor() { }

  ngOnInit(): void {
  }

}
