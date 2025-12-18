import { Component, inject } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card';
import { BannerCard } from '../banner-card/banner-card';
import { FooterCard } from '../footer-card/footer-card';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { SSeo } from '../../../core/service/other/seo/s-seo';
import { SSafeStorage } from '../../../core/service/global/safe-storage/s-safe-storage';
import { ToolsCard } from '../tools-card/tools-card';
import { WhyChoose } from '../why-choose/why-choose';
import { MetricsRow } from '../metrics-row/metrics-row';
import { HeaderCard } from '../header-card/header-card';

@Component({
  selector: 'app-index-page',
  imports: [
    BannerCard,
    FooterCard,
    // MenuCard,
    MateriallistModule,
    ToolsCard,
    WhyChoose,
    MetricsRow,
    HeaderCard,
  ],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss',
})
export class IndexPage {
  private seo = inject(SSeo);
  private safe = inject(SSafeStorage);
  showWhoIAm = false;

  ngOnInit(): void {
    this.initSeo();
    this.handleWhoIAmPopup();
  }

  private initSeo() {
    this.seo.updateMeta({
      title: 'Free Online Developer Tools for Web Developers | DevTools Hub',
      description:
        'Free online developer tools for web developers – JSON tools, formatters, converters, validators, security & SEO utilities. Fast, secure & easy to use.',
      keywords:
        'developer tools online developer tools web developer tools free dev tools json tools code formatter online code validator online programming tools',
      url: 'https://tools.satendracoder.com',
      image: 'https://tools.satendracoder.com/assets/favicon.ico',
    });
  }

  private handleWhoIAmPopup(): void {
    const popupShown = this.safe.getItem('whoAmShown');
    if (!popupShown) {
      this.showWhoIAm = true;
      this.safe.setItem('whoAmShown', 'true');
    } else {
      this.showWhoIAm = false;
    }
  }

  closeWhoIAm(): void {
    this.showWhoIAm = false;
  }
}
