import { Component } from '@angular/core';
import { MateriallistModule } from '../../../shared/materiallist/materiallist-module';

@Component({
  selector: 'app-why-choose',
  imports: [MateriallistModule],
  templateUrl: './why-choose.html',
  styleUrl: './why-choose.scss',
})
export class WhyChoose {
  items = [
    {
      icon: 'bolt',
      title: 'Fast & Lightweight Tools',
      desc: 'All tools run instantly in the browser with zero server delay and no unnecessary dependencies.',
    },
    {
      icon: 'security',
      title: 'Developer-First Security',
      desc: 'Your data never leaves the browser. No logs, no tracking, no storage.',
    },
    {
      icon: 'code',
      title: 'Built for Real Developers',
      desc: 'Every tool is designed for daily use in frontend, backend, and API development.',
    },

    {
      icon: 'update',
      title: 'Regularly Updated',
      desc: 'New tools and improvements are added based on developer feedback.',
    },
  ];
}
