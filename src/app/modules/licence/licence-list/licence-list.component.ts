import { Component, OnInit } from '@angular/core';
import { Licence } from 'src/app/data/schema/licence';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {

  licences: Licence[] = [

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
