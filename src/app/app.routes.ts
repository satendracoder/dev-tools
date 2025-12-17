import { Routes } from '@angular/router';
import { IndexPage } from './pages/home/index-page/index-page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
  },

  //@_CONVERTERS_ROUTES
  {
    path: 'converters',
    loadChildren: () =>
      import('./features/converters_tools/converters.route').then(
        (converters) => converters.CONVERTERS_ROUTES
      ),
  },

  //@UTILITE_ROUTES
  {
    path: 'dev-utilities',
    loadChildren: () =>
      import('./features/developer_utilities/utilities.route').then(
        (utilities) => utilities.UTILITE_ROUTES
      ),
  },

  //@FORMATTER_ROUTES
  {
    path: 'formatters',
    loadChildren: () =>
      import('./features/formatters_beautifiers/formatter.route').then(
        (formatter) => formatter.FORMATTER_ROUTES
      ),
  },

  //@METASEO_ROUTES
  {
    path: 'seo-tools',
    loadChildren: () =>
      import('./features/meta_seo_tools/meta.route').then((meta) => meta.METASEO_ROUTES),
  },

  //@MINIFICATION_ROUTES
  {
    path: 'minifiers',
    loadChildren: () =>
      import('./features/minification_tools/minification.route').then(
        (minification) => minification.MINIFICATION_ROUTES
      ),
  },

  //@SECURITY_ROUTES
  {
    path: 'security',
    loadChildren: () =>
      import('./features/security_tools/security.route').then((Sec) => Sec.SECURITY_ROUTES),
  },

  //@VALIDATOR_ROUTES
  {
    path: 'validators',
    loadChildren: () =>
      import('./features/validators_tools/validator.route').then(
        (validator) => validator.VALIDATOR_ROUTES
      ),
  },

  //@VIEWER_EDITOR_ROUTES
  {
    path: 'data-viewers',
    loadChildren: () =>
      import('./features/viewers_editors_tools/viewer.route').then(
        (validator) => validator.VIEWER_EDITOR_ROUTES
      ),
  },

  //Company is lazy loaded
  {
    path: '',
    loadComponent: () =>
      import('./layout/about-layout/about-layout').then((layout) => layout.AboutLayout),
    children: [
      //@_contact-us routes
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./pages/about/contact-us/contact-us.component').then(
            (company) => company.ContactUsComponent
          ),
      },
      //@_pricing-policy routes
      {
        path: 'pricing-policy',
        loadComponent: () =>
          import('./pages/about/c-pricing-policy/c-pricing-policy').then(
            (company) => company.CPricingPolicy
          ),
      },
      //@_privacy-policy routes
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import('./pages/about/c-privacy-policy/c-privacy-policy').then(
            (company) => company.CPrivacyPolicy
          ),
      },
      //@_terms-and-conditions routes
      {
        path: 'terms-and-conditions',
        loadComponent: () =>
          import('./pages/about/c-terms/c-terms').then((company) => company.CTerms),
      },
      //@_about_page routes
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/c-about-us/c-about-us').then((about) => about.CAboutUs),
      },
    ],
  },

  //@_about-us routes
];
