import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/widget/link';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navItems: Link[] = [
    {
      name: '购买',
      href: '/products'
    },
    {
      name: '许可',
      href: '/licences'
    },
    {
      name: '邀请',
      href: '/invitations',
    },
    {
      name: '成员',
      href: '/users',
    },
    {
      name: '交易历史',
      href: '/transactions',
    },
    {
      name: '设置',
      href: '/settings'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
