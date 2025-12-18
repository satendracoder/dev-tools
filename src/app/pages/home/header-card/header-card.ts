import { Component, effect, HostListener, Signal } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { CThemeToggle } from '../../../shared/components/c-theme-toggle/c-theme-toggle';
import { SSafeStorage } from '../../../core/service/global/safe-storage/s-safe-storage';
import { STheme } from '../../../core/service/global/theme/s-theme';
import { ScButtonComponent } from '../../../shared/components/ui/button/sc-button/sc-button.component';

@Component({
  selector: 'app-header-card',
  imports: [MateriallistModule, CThemeToggle, ScButtonComponent],
  templateUrl: './header-card.html',
  styleUrl: './header-card.scss',
})
export class HeaderCard {
  activeDropdown: string | null = null;
  activeMobileDropdown: string | null = null;
  isMobileMenuOpen = false;
  selectedTheme: string = 'light';
  avatarUser: any = '';
  isLoggedIn: boolean = false;
  isDarkTheme: Signal<boolean>;

  constructor(private safestorage: SSafeStorage, private themeService: STheme) {
    this.isDarkTheme = this.themeService.isDarkTheme;
    // Reactively update selectedTheme
    effect(() => {
      this.selectedTheme = this.isDarkTheme() ? 'dark' : 'light';
    });
  }

  menuItems = [
    {
      label: 'ALL Tools',
      key: 'all_tools',
      megaMenu: {
        sections: [
          {
            title: 'Security & Encoding',
            items: [
              { label: 'JWT Decoder & Generator', icon: '', link: '/security' },
              { label: 'Password Hash Generator', icon: '', link: '/security' },
              { label: 'Password Strength Checker', icon: '', link: '/security' },
              { label: 'MD5 Generator', icon: '', link: '/security' },
              { label: 'Base64 Encoder/Decoder', icon: '', link: '/security' },
              { label: 'URL Encoder/Decoder', icon: '', link: '/security' },
            ],
          },
          {
            title: 'Data Viewers & Editors',
            items: [
              { label: 'JSON Viewer & Editor', icon: '', link: '/' },
              { label: 'JSON Viewer & Editor', icon: '', link: '/' },
              { label: 'HTML Viewer', icon: '', link: '/' },
              { label: 'HTML Editor', icon: '', link: '/' },
              { label: 'Markdown Editor', icon: '', link: '/' },
              { label: 'Code Diff Checker', icon: '', link: '/' },
            ],
          },
          {
            title: 'Formatters & Beautifiers',
            items: [
              { label: 'JavaScript Formatter', icon: '', link: '/product-designer' },
              { label: 'HTML Formatter', icon: '', link: '/ux-designer' },
              { label: 'CSS Formatter', icon: '', link: '/ux-designer' },
              { label: 'JSON Formatter', icon: '', link: '/researcher' },
              { label: 'JSON Formatter', icon: '', link: '/ui-designer' },
              { label: 'PHP Formatter', icon: '', link: '/writer' },
            ],
          },
          {
            title: 'Code & Data Converters',
            items: [
              { label: 'Code & Data Converters', icon: '', link: '/product-designer' },
              { label: 'XML to JSON Converter', icon: '', link: '/ux-designer' },
              { label: 'JSON to CSV Converter', icon: '', link: '/ux-designer' },
              { label: 'CSV to JSON Converter', icon: '', link: '/researcher' },
              { label: 'HTML to JSX Converter', icon: '', link: '/ui-designer' },
              { label: 'JS to TS Converter', icon: '', link: '/writer' },
            ],
          },
        ],
      },
    },
  ];

  showDropdown(key: string) {
    this.activeDropdown = key;
  }

  hideDropdown() {
    this.activeDropdown = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeMobileDropdown = null;
    }
  }

  toggleMobileDropdown(key: string) {
    this.activeMobileDropdown = this.activeMobileDropdown === key ? null : key;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mega-menu-container')) {
      this.activeDropdown = null;
    }
  }

  // Change theme based on toggle
  onThemeChange(theme: string) {
    this.themeService.setTheme(theme === 'dark'); // 👈 Apply theme
  }
}
