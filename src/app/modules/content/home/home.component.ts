import { Component, OnInit } from '@angular/core';
import { RequestError } from 'src/app/data/schema/request-result';
import { AuthService } from 'src/app/core/service/auth.service';
import { Team } from 'src/app/data/schema/form-data';
import { sitemap } from 'src/app/layout/sitemap';
import { Router } from '@angular/router';
import { Button } from 'src/app/shared/widget/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apiErrors: RequestError;
  button: Button = Button.primary().setBlock().setName('保存');

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onTeamCreated(team: Team) {
    this.authService.createTeam(team);
    this.router.navigate([`/${sitemap.products}`]);
  }
}
