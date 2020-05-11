import { Component, OnInit } from '@angular/core';
import { licences } from 'src/app/data/mock';

@Component({
  selector: 'app-licence-list',
  templateUrl: './licence-list.component.html',
  styleUrls: ['./licence-list.component.scss']
})
export class LicenceListComponent implements OnInit {

  readonly licences = licences;

  constructor() { }

  ngOnInit(): void {
  }

}
