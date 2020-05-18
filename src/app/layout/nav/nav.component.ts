import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/widget/link';
import { sitemap } from '../sitemap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems: Link[] = [
    {
      name: '购买',
      href: `/${sitemap.products}`
    },
    {
      name: '许可',
      href: `/${sitemap.licences}`
    },
    {
      name: '邀请',
      href: `/${sitemap.invitations}`,
    },
    {
      name: '交易历史',
      href: `/${sitemap.transactions}`,
    },
    {
      name: '成员',
      href: `/${sitemap.staff}`,
    },
    {
      name: '设置',
      href: `/${sitemap.settings}`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
