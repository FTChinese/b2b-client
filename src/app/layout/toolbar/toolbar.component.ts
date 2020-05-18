import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { sitemap } from '../sitemap';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  settingsUrl = `/${sitemap.settings}`;

  constructor(
    public authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl('/login');
  }
}
