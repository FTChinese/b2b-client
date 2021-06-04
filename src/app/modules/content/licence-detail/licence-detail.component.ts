import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { mockLicences } from 'src/app/data/mock';
import { Licence } from 'src/app/data/schema/licence';

@Component({
  selector: 'app-licence-detail',
  templateUrl: './licence-detail.component.html',
  styleUrls: ['./licence-detail.component.scss']
})
export class LicenceDetailComponent implements OnInit {

  licence: Licence;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const licId = params.get('id');

        const lic = mockLicences.find(l => l.id === licId);

        if (lic) {
          return of(lic);
        } else {
          throw new Error('not found');
        }
      })
    )
    .subscribe({
      next: data => {
        this.licence = data;
      },
      error: err => console.log(err)
    });
  }

}
