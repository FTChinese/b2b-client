import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/data/schema/link';

interface FooterColumn {
  title: string;
  items: Link[];
}

const footerMatrix: FooterColumn[] = [
  {
    title: '支持',
    items: [
      {
        name: '关于我们',
        href: 'http://www.ftchinese.com/m/corp/aboutus.html',
      },
      {
        name: '职业机会',
        href: 'http://www.ftchinese.com/jobs/?from=ft',
      },
      {
        name: '问题回馈',
        href: 'http://www.ftchinese.com/m/corp/faq.html',
      },
      {
        name: '联系方式',
        href: 'http://www.ftchinese.com/m/corp/contact.html',
      },
    ],
  },
  {
    title: '法律事务',
    items: [
      {
        name: '服务条款',
        href: 'http://www.ftchinese.com/m/corp/service.html',
      },
      {
        name: '版权声明',
        href: 'http://www.ftchinese.com/m/corp/copyright.html',
      },
    ],
  },
  {
    title: '服务',
    items: [
      {
        name: '广告业务',
        href: 'http://www.ftchinese.com/m/corp/sales.html',
      },
      {
        name: '会议活动',
        href: 'http://www.ftchinese.com/m/events/event.html',
      },
      {
        name: '会员信息中心',
        href: 'http://www.ftchinese.com/m/marketing/home.html',
      },
      {
        name: '最新动态',
        href: 'http://www.ftchinese.com/m/marketing/ftc.html',
      },
      {
        name: '合作伙伴',
        href: 'http://www.ftchinese.com/m/corp/partner.html',
      },
    ],
  },
  {
    title: '关注我们',
    items: [
      {
        name: '微信',
        href: 'http://www.ftchinese.com/m/corp/follow.html',
      },
      {
        name: '微博',
        href: 'http://weibo.com/ftchinese',
      },
      {
        name: 'Linkedin',
        href:
          'https://www.linkedin.com/company/4865254?trk=hp-feed-company-name',
      },
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/financialtimeschinese',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/FTChinese',
      },
    ],
  },
  {
    title: 'FT产品',
    items: [
      {
        name: 'FT研究院',
        href: 'http://www.ftchinese.com/m/marketing/intelligence.html',
      },
      {
        name: 'FT商学院',
        href: 'http://www.ftchinese.com/channel/mba.html',
      },
      {
        name: 'FT电子书',
        href: 'http://www.ftchinese.com/m/marketing/ebook.html',
      },
      {
        name: '数据新闻',
        href: 'http://www.ftchinese.com/channel/datanews.html',
      },
      {
        name: 'FT英文版',
        href: 'https://www.ft.com/',
      },
    ],
  },
  {
    title: '移动应用',
    items: [
      {
        name: '安卓',
        href: '/android/latest',
      },
    ],
  },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  version = '1.0.0';
  matrix = footerMatrix;

  constructor() {}

  ngOnInit(): void {}
}
