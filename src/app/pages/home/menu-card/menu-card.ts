import { Component, effect, HostListener, inject, Signal } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';
import { RouterLink, RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SSafeStorage } from '../../../core/service/global/safe-storage/s-safe-storage';
import { ScButtonComponent } from '../../../shared/components/button/sc-button/sc-button.component';
import { STheme } from '../../../core/service/global/theme/s-theme';
import { CThemeToggle } from '../../../shared/components/c-theme-toggle/c-theme-toggle';

interface MenuItem {
  label: string;
  link?: string;
  hasDropdown: boolean;
  dropdownItems?: any[];
}

interface User {
  name: string;
  email: string;
  avatar?: string;
}

@Component({
  selector: 'app-menu-card',
  imports: [MateriallistModule, RouterLink, RouterLinkWithHref, CThemeToggle, ScButtonComponent],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.scss',
})
export class MenuCard {
  activeDropdown: string | null = null;
  isMobileMenuOpen: boolean = false;
  isLoggedIn: boolean = false;
  currentUser: User | null = null;
  selectedTheme: string = 'light';
  isDarkTheme: Signal<boolean>;
  avatarUser: any = '';

  readonly dialog = inject(MatDialog);

  constructor(private safestorage: SSafeStorage, private themeService: STheme) {
    const userdata = this.safestorage.getItem('userdata');
    this.avatarUser = userdata;
    if (userdata) {
      this.isLoggedIn = true;
      this.currentUser = {
        name: userdata?.name,
        email: userdata?.email,
      };
      this.closeDropdowns();
    } else {
      this.isLoggedIn = false;
    }

    this.isDarkTheme = this.themeService.isDarkTheme;
    // Reactively update selectedTheme
    effect(() => {
      this.selectedTheme = this.isDarkTheme() ? 'dark' : 'light';
    });
  }

  ngOnInit(): void {}

  menuItems: MenuItem[] = [
    // Security
    {
      label: 'Security',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'JWT Generator',
          link: '/dsa-sheets',
        },
        {
          name: 'Base64 Encoder / Decoder',
          link: '/generative-ai',
        },

        {
          name: 'URL Encoder / Decoder',
          link: '/mock-tests',
        },
        {
          name: 'Password Hash Generator',
          link: '/interview',
        },
        {
          name: 'Password Strength Checker',
          link: '/interview',
        },

        {
          name: 'MD5 Generator',
          link: '/interview',
        },
      ],
    },

    // Viewers
    {
      label: 'Viewers',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'JSON Viewer & Editor',
          link: '/handbooks',
        },
        {
          name: 'XML Viewer & Editor',
          link: '/dsa-sheets',
        },
        {
          name: 'HTML Editor Online',
          link: '/generative-ai',
        },

        {
          name: 'Code Diff Checker',
          link: '/mock-tests',
        },
        {
          name: 'Markdown Editor (Write & Preview)',
          link: '/interview',
        },
      ],
    },

    //
    {
      label: 'Formatters',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'HTML Formatter',
          link: '/handbooks',
        },
        {
          name: 'CSS Formatter',
          link: '/dsa-sheets',
        },
        {
          name: 'JavaScript Formatter',
          link: '/generative-ai',
        },

        {
          name: 'JSON Formatter',
          link: '/mock-tests',
        },
        {
          name: 'XML Formatter',
          link: '/interview',
        },
      ],
    },

    // Minifiers
    {
      label: 'Minifiers',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Minify HTML',
          link: '/handbooks',
        },
        {
          name: 'Minify CSS',
          link: '/dsa-sheets',
        },
        {
          name: 'Minify JavaScript',
          link: '/generative-ai',
        },

        {
          name: 'Minify JSON',
          link: '/mock-tests',
        },
        {
          name: 'Minify XML',
          link: '/interview',
        },
      ],
    },

    // Code Validators
    {
      label: 'Code Validators',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'HTML Validator',
          link: '/handbooks',
        },
        {
          name: 'CSS Validator',
          link: '/dsa-sheets',
        },
        {
          name: 'JavaScript Validator',
          link: '/generative-ai',
        },

        {
          name: 'W3C Validator (HTML/CSS)',
          link: '/mock-tests',
        },
        {
          name: 'Responsive Design Checker',
          link: '/interview',
        },
      ],
    },

    // Converters
    {
      label: 'Converters',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'JSON → XML Converter',
          link: '/handbooks',
        },
        {
          name: 'XML → JSON Converter',
          link: '/dsa-sheets',
        },
        {
          name: 'JSON → CSV Converter',
          link: '/generative-ai',
        },

        {
          name: 'CSV → JSON Converter',
          link: '/mock-tests',
        },
        {
          name: 'HTML → JSX Converter',
          link: '/interview',
        },
      ],
    },

    {
      label: 'Utilities',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Robots.txt Generator',
          link: '/handbooks',
        },
        {
          name: 'Sitemap.xml Generator',
          link: '/dsa-sheets',
        },
        {
          name: 'Favicon Generator',
          link: '/generative-ai',
        },

        {
          name: 'Regex Tester',
          link: '/mock-tests',
        },
        {
          name: 'UUID Generator',
          link: '/interview',
        },
        {
          name: 'CSS & Layout Generators',
          link: '',
        },
      ],
    },
  ];

  private logout(): void {
    this.safestorage.removeItem('userdata');
    this.isLoggedIn = false;
    this.currentUser = null;
    this.closeDropdowns();
  }

  toggleDropdown(menuLabel: string): void {
    if (this.isMobileMenuOpen) {
      // Mobile behavior - toggle dropdown
      this.activeDropdown = this.activeDropdown === menuLabel ? null : menuLabel;
    } else {
      // Desktop behavior - toggle dropdown
      this.activeDropdown = this.activeDropdown === menuLabel ? null : menuLabel;
    }
  }

  closeDropdowns(): void {
    this.activeDropdown = null;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.closeDropdowns();
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    this.closeDropdowns();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const navItem = target.closest('.nav-item');
    const mobileToggle = target.closest('.mobile-menu-toggle');

    // Don't close dropdown if clicking within the same nav item or mobile toggle
    if (!navItem && !mobileToggle) {
      this.closeDropdowns();
    } else if (navItem && !this.isMobileMenuOpen) {
      // Desktop: close other dropdowns when clicking different nav item
      const clickedItem = navItem.querySelector('.nav-link')?.textContent?.trim();
      if (clickedItem && this.activeDropdown && this.activeDropdown !== clickedItem) {
        this.activeDropdown = clickedItem;
      }
    }
  }

  // Change theme based on toggle
  onThemeChange(theme: string) {
    this.themeService.setTheme(theme === 'dark'); // 👈 Apply theme
  }

  callBack() {
    console.log('Button clicked, attempting redirect...');
    debugger;
    window.location.href = 'https://satendracoder.com/';
  }
}
