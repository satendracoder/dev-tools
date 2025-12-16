import { Routes } from '@angular/router';
import { IndexPage } from './pages/home/index-page/index-page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage,
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
    ],
  },

  //@_about-us routes
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/c-about-us/c-about-us').then((about) => about.CAboutUs),
  },
];
