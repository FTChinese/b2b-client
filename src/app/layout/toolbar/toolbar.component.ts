import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Router } from '@angular/router';
import { sitemap } from '../sitemap';
import { CartService } from 'src/app/data/service/cart.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  settingsUrl = `/${sitemap.settings}`;
  cartUrl = `/${sitemap.cart}`;
  homeUrl = `/`;

  constructor(
    readonly authService: AuthService,
    private route: Router,
    readonly cartService: CartService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.route.navigateByUrl(`/${sitemap.login}`);
  }
}


